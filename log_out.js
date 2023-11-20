import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);

const logoutButton = document.getElementById('logout-button');

  // 로그아웃 버튼을 클릭했을 때 로그아웃 함수를 호출
logoutButton.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('로그아웃 중 오류 발생:', error.message);
    } else {
      // 로그아웃에 성공했을 때 필요한 동작을 수행할 수 있습니다.
      alert('로그아웃 되었습니다.');
      window.location.href = 'home.html'; // 로그아웃 후 리디렉션할 페이지로 이동합니다.
    }
  });