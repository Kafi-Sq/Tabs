const about = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        articles.forEach((art) => {
            art.classList.remove('active')
        })
        const el = document.getElementById(id)
        el.classList.add('active')
    }
})