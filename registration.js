import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://poktjrhwxlfhtmzhwxxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3Rqcmh3eGxmaHRtemh3eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDM1NjgsImV4cCI6MjAxMjU3OTU2OH0.gWuR3vBZqM2zjHSGH0JfdJz5j9t4rOGy839b3zII208';
const supabase = createClient(supabaseUrl, supabaseKey);

  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Supabase 회원가입
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('사용자 등록 오류:', error.message);
    } else {
      // 회원가입 성공 시 추가 작업 수행 가능 (예: 사용자 데이터 저장)
      console.log('사용자가 성공적으로 등록되었습니다:', user);
      alert('회원가입이 완료되었습니다.');

      // 여기서 사용자 데이터를 Supabase 데이터베이스에 저장할 수 있습니다.
      const { data, error } = await supabase
        .from('users')
        .upsert([
          {
            email,
          },
        ]);
      if (error) {
        console.error('사용자 데이터 저장 오류:', error.message);
      } else {
        console.log('사용자 데이터가 성공적으로 저장되었습니다:', data);
      }
    }
    // 다른 페이지로 네비게이션
    window.location.href = 'login.html';

  });