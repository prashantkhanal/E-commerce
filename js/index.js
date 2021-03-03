//----------------------for modal--------------------------------

const modal = document.querySelector(`.modal-window`);
const exitModal = document.querySelector(`.close-modal`);
const overLay = document.querySelector(`.overlay`);
const iconBtn = document.querySelector(`#btnjs`);

const openModal = function () {
	modal.classList.remove(`hidden`);
	overLay.classList.remove(`hidden`);
};

const closeModal = function () {
	modal.classList.add(`hidden`);
	overLay.classList.add(`hidden`);
};

iconBtn.addEventListener(`click`, openModal);
exitModal.addEventListener(`click`, closeModal);
overLay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
	if (e.key === `Escape` && !modal.classList.contains(`hidden`)) closeModal();
});
// ----------------slider-----------------
$(".slider").slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
	],
});
