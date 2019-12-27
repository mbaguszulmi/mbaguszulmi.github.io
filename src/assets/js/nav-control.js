let lastScrollTop = 0

window.listenNavScroll = () => {
    let nav = document.querySelector('.top-nav')

    document.addEventListener("scroll", () => {
        let st = window.pageYOffset || document.documentElement.scrollTop

        if (st > 100) {
            nav.classList.add('with-bg')
        }
        else {
            nav.classList.remove('with-bg')
        }

        if (st > lastScrollTop){
            nav.classList.remove('show')
        }
        else {
            nav.classList.add('show')
        }
        lastScrollTop = st <= 0 ? 0 : st
    }, false)
}