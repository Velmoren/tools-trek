import { CountUp } from '../helpers/countUp';

export const countersModule = () => {
    window.onload = function () {
        const statsFlags = new Set();

        const startCountUp = (element) => {
            const id = element.id;
            const endValue = parseInt(element.dataset.value, 10);

            if (statsFlags.has(id)) return;

            const countUp = new CountUp(id, endValue, {
                enableScrollSpy: false,
                duration: 4,
            });

            countUp.start();
            statsFlags.add(id);
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCountUp(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        document.querySelectorAll('[data-value]').forEach((element) => {
            observer.observe(element);
        });
    };
}