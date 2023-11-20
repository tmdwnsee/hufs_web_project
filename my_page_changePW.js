import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateUserPassword() {
    // 비밀번호 입력 필드에서 값을 가져옵니다.
    const newEmail = document.getElementById("pw").value;
  
    try {
      // Supabase의 updateUser 함수를 호출하여 비밀번호을 업데이트합니다.
      const { data, error } = await supabase.auth.updateUser({password: 'new password'})
  
      if (error) {
        // 업데이트 중 오류 발생 시 오류 처리를 수행합니다.
        console.error("비밀번호 업데이트 오류:", error);
      } else {
        // 비밀번호 업데이트가 성공하면 성공 메시지를 출력합니다.
        console.log("비밀번호가 성공적으로 업데이트되었습니다.");
        alert("비밀번호가 성공적으로 업데이트되었습니다.")
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }
  
  const updatePwButton = document.getElementById("alert_2");
  updatePwButton.addEventListener("click", updateUserPassword);
    