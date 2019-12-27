let sliders
let scrollLeft, startX, isMouseDown = false

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
            event.preventDefault()
            const x = event.pageX - slider.offsetLeft
            const walk = (x - startX)
            slider.scrollLeft = scrollLeft - walk
        })
    })
}