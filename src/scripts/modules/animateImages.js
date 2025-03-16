export const animateImagesFunc = ({wrapper, element}) => {
    const images = document.querySelectorAll(wrapper)

    if (images.length) {
        images.forEach(image => {
            const elems = image.querySelectorAll(element)
        
            let isShow = false
            let count = 0
            let showedElem = null
    
            const coloredImage = (el) => {
                isShow = true
                el.classList.add('colored')
            }
    
            const unColoredImage = (el) => {
                isShow = false
                el.classList.remove('colored')
            }
    
    
            setInterval(() => {
                if (!isShow) {
                    if (count > elems.length - 1) {
                        count = 0
                        
                    } 
    
                    showedElem = elems[count]
    
                    coloredImage(showedElem)
    
                    count = count + 1
                } else {
                    unColoredImage(showedElem)
                }
            }, 3000)
        })
    }
}