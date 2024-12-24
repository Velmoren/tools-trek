import Splide from '@splidejs/splide';

export const splidesModule = () => {
    new Splide('.products-slider', {
        perPage : 3,
        perMove: 1,
        gap: '20px',
        breakpoints: {
            1020: {
                perPage : 2,
            },
            820: {
                arrows: false,
                pagination: true,
                perPage : 1,
                autoWidth: true,
                padding: '12px'
            },
      }
    }).mount();
}