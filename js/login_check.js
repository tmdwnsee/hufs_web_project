document.addEventListener("DOMContentLoaded", () => {
    const btn_info = document.querySelector("#btn_info")
    const info_btn = document.querySelector("#info_btn")
    

    btn_info.addEventListener("click", () => {
        
        alert('로그인을 먼저 해주세요.')
        window.location.href = 'login.html'
        return false
        
    })

    info_btn.addEventListener("click", () => {
        
        alert('로그인을 먼저 해주세요.')
        window.location.href = 'login.html'
        return false
        
    })
})


