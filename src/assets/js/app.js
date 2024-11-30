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

// изменено 29.10.2024
//  изменен animateCounter(".counter", 0, 95, 5000, 3600);

animateCounter(".counter", 0, 95, 5000, 1500);

// play audio

function audioPlay() {
	const btnStart = document.querySelectorAll(".example__player-btn");
	if (btnStart) {
		btnStart.forEach((btn) => {
			btn.addEventListener("click", () => {
				const audioWrapp = btn.closest(".example__player");
				const audio = audioWrapp.querySelector("audio");
				audio.play();
				if (!btn.classList.contains("--pause")) {
					btn.classList.add("--pause");
					audio.play();
				} else {
					audio.pause();
					btn.classList.remove("--pause");
				}
			});
		});
	}
}
audioPlay();

// tab

const tab = () => {
	const btnAllTab = document.querySelectorAll(".example__tab-btn");
	if (btnAllTab) {
		btnAllTab.forEach((btnTab) => {
			btnTab.addEventListener("click", () => {
				const attrTab = btnTab.getAttribute("data-tab");
				const id = document.getElementById(attrTab);
				deactiveBtnTab(btnAllTab);
				activeBtn(btnTab);
				deactiveTab();
				activeTab(id);
			});
		});
		activeLoadPageTab(btnAllTab);
		// правка от 5.11.2024 баг переключения таобов при скролле в мобильной версии
		// необходимо закоментирповать
		// window.addEventListener("resize", () => {
		// 	activeLoadPageTab(btnAllTab);
		// });
	}
};

tab();

function deactiveTab() {
	const allTab = document.querySelectorAll(".example__tab");
	if (allTab) {
		allTab.forEach((tab) => {
			tab.classList.remove("--active");
		});
	}
}

function activeTab(id) {
	id.classList.add("--active");
}

function deactiveBtnTab(btnAllTab) {
	btnAllTab.forEach((btn) => {
		btn.classList.remove("--active");
	});
}

function activeBtn(btn) {
	btn.classList.add("--active");
}
// измененая функция
function activeLoadPageTab(btnAllTab) {
	const windowWidth = window.innerWidth;
	let btnActive;
	let attrTab;
	let deactivableButton;

	btnAllTab.forEach((btn) => {
		if (btn.classList.contains("--active")) {
			deactivableButton = btn;
		}
	});

	if (windowWidth > 762) {
		// внесена правка 12.11.2024
		if (
			deactivableButton &&
			deactivableButton.classList.contains("example__tab-btn-analysis")
		) {
			btnActive = document.querySelector(".example__tab-start");
		}
	} else {
		btnActive = document.querySelector(".example__tab-btn-analysis");
	}
	if (btnActive) {
		attrTab = btnActive.getAttribute("data-tab");
		const id = document.getElementById(attrTab);
		deactiveBtnTab(btnAllTab);
		activeBtn(btnActive);
		deactiveTab();
		activeTab(id);
	}
}

const accordionExamplePage = () => {
	const btns = document.querySelectorAll(".example__acc-btn");
	if (btns) {
		btns.forEach((btn) => {
			btn.addEventListener("click", () => {
				deactiveBtnAccordionAll();
				deactiveAllWrappAccordion();
				accordionExamplePageActive(btn);
			});
		});
	}
};
accordionExamplePage();

function closeAllAccordionExamplePage() {
	const allBtnClose = document.querySelectorAll(".example__button-close");

	if (allBtnClose) {
		allBtnClose.forEach((btn) => {
			btn.addEventListener("click", () => {
				deactiveBtnAccordionAll();
				deactiveAllWrappAccordion();
			});
		});
	}
}
closeAllAccordionExamplePage();
function accordionExamplePageActive(item, btns) {
	let accordionWrapp = item.closest(".example__acc");
	let panel = accordionWrapp.querySelector(".example__acc-wrapp");

	item.classList.add("--active");
	activeWrapp(panel);
}

function deactiveBtnAccordionAll() {
	const btns = document.querySelectorAll(".example__acc-btn");
	if (btns) {
		btns.forEach((item) => {
			item.classList.remove("--active");
		});
	}
}
function deactiveAllWrappAccordion() {
	const accordionWrappAll = document.querySelectorAll(".example__acc-wrapp");
	accordionWrappAll.forEach((panel) => {
		panel.style.maxHeight = null;
	});
}

function activeWrapp(panel) {
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		positioningBlocksRelativeParentBlock(panel, panel.scrollHeight);
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}

function positioningBlocksRelativeParentBlock(ChildBlock, heightChildBlock) {
	const parentBlock = document.querySelector(".example__wrapp");
	if (parentBlock) {
		const heightParentBlock = parentBlock.offsetHeight;

		// Получаем координаты родителя и ребенка
		const parentRect = parentBlock.getBoundingClientRect();
		const childRect = ChildBlock.getBoundingClientRect();

		const distance = childRect.top - parentRect.top;

		const offsetHeightChild = distance + heightChildBlock;

		if (offsetHeightChild > heightParentBlock) {
			const correctiveOffset = heightParentBlock - offsetHeightChild;
			ChildBlock.style.top = `${correctiveOffset}px`;
		}
	}
}

// add 12.11.2024

// animate number
/**
 *
 * @param {*} accWrapp - класс обертки аккордиона
 * @param {*} btnsOpenAcc - класс кнопки раскрытия аккордиона
 * @param {*} panelAcc - класс скрытой части аккордиона
 */

function accordionTable(accWrapp, btnsOpenAcc, panelAcc) {
	const btnsOpen = document.querySelectorAll(`${btnsOpenAcc}`);
	if (btnsOpen) {
		btnsOpen.forEach((btn) => {
			btn.addEventListener("click", () => {
				const accordionWrapp = btn.closest(`${accWrapp}`);
				const panel = accordionWrapp.querySelector(`${panelAcc}`);
				accordionWrapp.classList.toggle("--active");
				activeWrapp(panel);
			});
		});
	}
}

accordionTable(
	".analysis__table-select",
	".analysis-table-btn",
	".analysis__table-select-wrapp"
);

// add 29.11.2024
function fixedHeadTable() {
	const fixElement = document.querySelector(".analysis__table-head");
	const wrapperElement = document.querySelector(".analysis__table-wrapp");
	const header = document.querySelector(".header ");
	if (fixElement && wrapperElement && header) {
		wrapperElement.style = `padding-top:${fixElement.offsetHeight}px`;
		window.addEventListener("scroll", function () {
			const scrollTop = window.scrollY;
			const wrapperOffsetTop = wrapperElement.offsetTop;
			const headerOfsetHeight =
				document.querySelector(".header ").offsetHeight;
			if (scrollTop > wrapperOffsetTop + headerOfsetHeight + 30) {
				const offsetTop =
					scrollTop - wrapperOffsetTop - headerOfsetHeight - 30;

				fixElement.style.top = `${offsetTop}px`;
			} else {
				fixElement.style.top = "";
			}
		});
	}
}

fixedHeadTable();
