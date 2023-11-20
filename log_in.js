import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);

// 로그인 버튼 클릭 이벤트 핸들러에서 사용자 로그인을 처리합니다.
login_btn.addEventListener("click", async () => {
  const email = document.querySelector("#email").value;
  const pw = document.querySelector('#pw').value;
  try {
    // Supabase 로그인 요청을 보냅니다.
    const { user, session, error } = await supabase.auth.signInWithPassword({ email, password: pw });
    if (error) {
      // 로그인 에러가 발생한 경우 에러 메시지를 표시합니다.
      alert('로그인에 실패했습니다: ' + error.message);
    } else {
      // 로그인 성공한 경우 로그인된 사용자에 대한 정보를 사용하거나 리디렉션을 수행할 수 있습니다.
      alert('로그인 성공!');
      // 사용자를 다른 페이지로 리디렉션하는 예: window.location.href = '다른페이지.html';
      window.location.href = 'member_home.html';
    }
  } catch (error) {
    console.error('로그인 처리 중 오류 발생: ', error);
  }
});
