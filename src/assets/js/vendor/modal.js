// открытия модальных окон

function openModalWindow() {
	const btn = document.querySelectorAll("[data-open-modal]");
	const modalContainer = document.querySelectorAll(".modal__container-fon");
	if (btn && modalContainer) {
		const htmlRoot = document.querySelector("html");
		const btnClose = document.querySelectorAll(".btn__modal--close");
		let modalContainerContent = document.querySelectorAll(
			".modal___container-content"
		);
		btn.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				let dataAtr = item.getAttribute("data-open-modal");
				let idBox = document.getElementById(dataAtr);
				modalContainer.forEach((e) => {
					e.classList.remove("--active");
				});
				idBox.classList.add("--active");
				htmlRoot.classList.add("--stop");
			});
		});
		btnClose.forEach((button) => {
			button.addEventListener("click", () => {
				close();
			});
		});
		modalContainer.forEach((i) => {
			i.addEventListener("click", (e) => {
				close();
			});
		});
		modalContainerContent.forEach((x) => {
			x.addEventListener("click", (e) => {
				e.stopPropagation();
			});
		});
		window.addEventListener("resize", () => {
			if (window.innerWidth > 740) {
				close();
			}
		});
		function close() {
			htmlRoot.classList.remove("--stop");
			modalContainer.forEach((e) => {
				e.classList.remove("--active");
			});
		}
	}
}
openModalWindow();
