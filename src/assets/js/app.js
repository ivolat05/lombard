// animate number
/**
 *
 * @param {*} classBlock - класс блока который необходимо анимировать
 * @param {*} start - начальная цифра
 * @param {*} end - конечная цифра
 * @param {*} duration - продолжительность анимации
 * @param {*} delay - время задержки анимации
 */
function animateCounter(classBlock, start, end, duration, delay) {
	const blockText = document.querySelector(classBlock);

	if (blockText) {
		let startTimestamp = null;

		const easeInOutQuad = (progress) => {
			return progress < 0.5
				? 2 * progress * progress // Ускорение
				: 1 - Math.pow(-2 * progress + 2, 2) / 2; // Замедление
		};

		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			let progress = Math.min((timestamp - startTimestamp) / duration, 1);

			// Применяем плавное увеличение и замедление скорости
			progress = easeInOutQuad(progress);

			blockText.innerText = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		// Задержка перед началом анимации
		setTimeout(() => {
			window.requestAnimationFrame(step);
		}, delay);
	}
}

animateCounter(".counter", 0, 95, 5000, 3600);
