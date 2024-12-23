export const customTableModule = () => {
    const tables = document.querySelectorAll('.custom-table')

    tables.forEach(table => {
        const titles = table.querySelectorAll('.custom-table__desc--item')
        const types = table.querySelectorAll('.custom-table__types--item')

        const activeRow = (item) => {
            const idx = item.dataset.line
    
            if (idx) {
                const elements = table.querySelectorAll(`[data-line="${idx}"]`)
                elements.forEach(i => i.classList.add('-active'))
            }
        }

        const disactiveRow = (item) => {
            const idx = item.dataset.line
    
            if (idx) {
                const elements = table.querySelectorAll(`[data-line="${idx}"]`)
                elements.forEach(i => i.classList.remove('-active'))
            }
        }
        
        [...titles, ...types].forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (document.documentElement.scrollWidth <= 991) {
                    return
                } 
                
                activeRow(item);
            })
            item.addEventListener('mouseleave', () => {
                if (document.documentElement.scrollWidth <= 991) {
                    return
                } 
                
                disactiveRow(item);
            })
        })
    })
}