let sliders
let scrollLeft, startX, isMouseDown = false, isSliding = false

window.listenSlider = () => {
    sliders = document.querySelectorAll('.slider')

    sliders.forEach(slider => {
        slider.addEventListener('mousedown', event => {
            isMouseDown = true
            startX = event.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })

        slider.addEventListener('mouseleave', event => {
            isMouseDown = false
        })

        slider.addEventListener('mouseup', event => {
            isMouseDown = false
        })

        slider.addEventListener('mousemove', event => {
            if (!isMouseDown) return
            isSliding = true
            event.preventDefault()
            const x = event.pageX - slider.offsetLeft
            const walk = (x - startX)
            slider.scrollLeft = scrollLeft - walk
        })
    })
}

window.projectCardClick = event => {
    if (isSliding) {
        event.preventDefault()
        isSliding = false
    }
}