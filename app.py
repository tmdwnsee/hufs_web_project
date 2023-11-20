from flask import Flask, render_template, request
import os
from supabase_py import create_client
from gensim.models import Word2Vec
from nltk.tokenize import word_tokenize

app = Flask(__name__)

# Supabase 클라이언트 생성
os.environ["SUPABASE_URL"] = "https://poktjrhwxlfhtmzhwxxh.supabase.co"
os.environ["SUPABASE_KEY"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzAwMzU2OCwiZXhwIjoyMDEyNTc5NTY4fQ.ent9ALaIYrTG_G96xHEF8fr9CwxW3jrefUJTUvkAtbU"
supabase = create_client(os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_KEY"))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    user_hashtags = [
        request.form.get("hashtag1"),
        request.form.get("hashtag2"),
        request.form.get("hashtag3")
    ]

    data = supabase.table("case").select("NM", "Region", "KW1", "KW2", "KW3").execute()

    # Word embeddings 모델 학습을 위한 문장 생성
    sentences = []
    for row in data["data"]:
        hashtags = [row["KW1"], row["KW2"], row["KW3"]]
        sentences.append(word_tokenize(" ".join(hashtags)))

    # Word embeddings 모델 학습
    word2vec_model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

    # 입력한 해시태그의 순서와 상관없이 찾기
    filtered_data = []

    # 해시태그가 3개 이상인 경우를 먼저 추가
    for row in data["data"]:
        hashtags = [row["KW1"], row["KW2"], row["KW3"]]
        similarity = word2vec_model.wv.n_similarity(user_hashtags, hashtags)
        if (similarity > 0.5) & (set(user_hashtags) <= set(hashtags)):
            filtered_data.append(row)

    # 해시태그가 2개일 경우 추가
    if len(filtered_data) < 5:
        for row in data["data"]:
            hashtags = [row["KW1"], row["KW2"], row["KW3"]]
            common_hashtags = set(user_hashtags) & set(hashtags)
            if len(common_hashtags) == 2:
                filtered_data.append(row)

    # 해시태그가 1개일 경우 추가
    if len(filtered_data) < 5:
        for row in data["data"]:
            hashtags = [row["KW1"], row["KW2"], row["KW3"]]
            common_hashtags = set(user_hashtags) & set(hashtags)
            if len(common_hashtags) == 1:
                filtered_data.append(row)

    return render_template('result.html', data=filtered_data)

if __name__ == '__main__':
    app.run(debug=True)
