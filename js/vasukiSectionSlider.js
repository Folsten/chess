// !!! Слайдер решил делать анимированным и гибким в плане количества слайдов

export default function () {

  // Основная функция слайдера
  const slider = (direction) => {
    if (!isNextSlidePossible(direction)) {
      return
    }
    switchSlide(direction)
    switchPaginationStep()
    arrowClassSwitcher()
  };

  // Проверка на возможность смены слайда в определённом направлении
  const isNextSlidePossible = (direction) => {
    if (direction === "left" && currentSlide === 0) {
      return false;
    }
    if (direction === "right" && currentSlide === numberOfSlides - 1) {
      return false;
    }
    return true;
  };

  // Функция для переключения слайда
  const switchSlide = (direction) => {
    let currentPosition = allPlates[0].style.transform.replace(/[^\d-]/g, "")
    let newPosition;

    if (direction === "left") {
      currentSlide -= 1;
      newPosition = +currentPosition + 335;
    }
    if (direction === "right") {
      currentSlide += 1;
      newPosition = +currentPosition + -335;
    }

    for (let plate of allPlates) {
      plate.style.transform = `translateX(${newPosition}px)`
    }
  };

  // Функция для изменения
  const switchPaginationStep = () => {
    document
      .getElementsByClassName("vasukiSection__sliderPaginationCircle_active")[0]
      .classList.remove("vasukiSection__sliderPaginationCircle_active");
    document
      .getElementsByClassName("vasukiSection__sliderPaginationCircle")
      [currentSlide].classList.add(
        "vasukiSection__sliderPaginationCircle_active"
      );
  };

  // Функция проверки на необходимость добавления стрелке класса Disabled
  const arrowClassSwitcher = () => {
    sliderButtons[0].classList.remove("sliderSwitchButton_disabled")
    sliderButtons[1].classList.remove("sliderSwitchButton_disabled")
    if (currentSlide === 0) {
      sliderButtons[0].classList.add("sliderSwitchButton_disabled")
    }
    if (currentSlide === numberOfSlides - 1) {
      sliderButtons[1].classList.add("sliderSwitchButton_disabled")
    }
  }

  // Объявление основных переменных и получение узлов из DOM.
  let currentSlide = 0;
  const platesContainer = document.getElementsByClassName("vasukiSection__plates")[0]
  const allPlates = document.getElementsByClassName("vasukiSection__platesPlate")
  const numberOfSlides = window.getComputedStyle(platesContainer).gridTemplateColumns.split(" ").length
  const paginationSteps = document.getElementsByClassName("vasukiSection__sliderPaginationSteps")[0]
  const sliderButtons = document.getElementsByClassName("vasukiSection__sliderSwitchButton")

  // Вешаю событие по переключению активного слайда на левую и правую кнопки
  sliderButtons[0].addEventListener("click", slider.bind(null, "left"));
  sliderButtons[1].addEventListener("click", slider.bind(null, "right"));

  // В цикле создаём необходимое количество <div> для отображения шагов слайдера и помещаем их в DOM.
  for (let i = 0; i < numberOfSlides; i++) {
    let circle = document.createElement("div");
    circle.className = "vasukiSection__sliderPaginationCircle";
    if (i === 0) {
      circle.classList.add("vasukiSection__sliderPaginationCircle_active");
    }
    paginationSteps.appendChild(circle);
  }
}
