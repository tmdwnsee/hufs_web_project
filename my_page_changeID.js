import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);

 // HTML 파일에 있는 "수정" 버튼을 클릭할 때 실행되는 함수
 async function updateUserEmail() {
    // 이메일 입력 필드에서 값을 가져옵니다.
    const newEmail = document.getElementById("userChangeEmail").value;
  
    try {
      // Supabase의 updateUser 함수를 호출하여 이메일을 업데이트합니다.
      const { data, error } = await supabase.auth.updateUser({ email: newEmail });
  
      if (error) {
        // 업데이트 중 오류 발생 시 오류 처리를 수행합니다.
        console.error("이메일 업데이트 오류:", error);
      } else {
        // 이메일 업데이트가 성공하면 성공 메시지를 출력합니다.
        console.log("이메일이 성공적으로 업데이트되었습니다.");
        alert("이메일이 성공적으로 업데이트되었습니다.")
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }
  
  // "수정" 버튼을 클릭할 때 updateUserEmail 함수를 호출합니다.
  const updateButton = document.getElementById("alert_1");
  updateButton.addEventListener("click", updateUserEmail);
  