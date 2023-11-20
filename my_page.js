import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);
// 사용자 정보 가져오기

async function getUserInfo() {
    const { data: { user }, error } = await supabase.auth.getUser();
  
    if (error) {
      console.error('사용자 정보를 가져오는 중 오류가 발생했습니다.', error);
      return;
    }

  
    // 사용자 정보에서 이메일 가져오기
    const userEmail = user.email;
  
    // HTML 입력란에 이메일 삽입
    const emailInput = document.getElementById('userEmail');
    emailInput.value = userEmail; // 입력란의 값을 설정
  
    // 레이블을 클릭하면 입력란에 초점을 맞춤
    const emailLabel = document.querySelector('label[for="userEmail"]');
    emailLabel.addEventListener('click', function() {
      emailInput.focus();
    });
  }
  
  // 페이지 로드 시 사용자 정보 가져오기
  getUserInfo();

