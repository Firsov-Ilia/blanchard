document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#header-top__burger').addEventListener('click', function() {
    document.querySelector('#header__menu').classList.toggle('active')
  });

  document.querySelector('#header-top__burger').addEventListener('click', function() {
    document.querySelector('#header-top__burger').classList.toggle('active')
  });

  document.querySelector('#header-top__button').addEventListener('click', function() {
    document.querySelector('#header-top__button').classList.toggle('active');
    document.querySelector('#header-top__search').classList.toggle('active');
    document.querySelector('#header-top__search-btn').classList.toggle('active');
    document.querySelector('#header-top__input').classList.toggle('active');
  });

  document.querySelector('#header-top__burger').addEventListener('click', function() {
    document.querySelector('#body').classList.toggle('active')
  });

  document.querySelectorAll('.header-nav__link').forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      document.querySelector('#header__menu').classList.remove('active')
      document.querySelector('#body').classList.remove('active')
      document.querySelector('#header-top__burger').classList.remove('active')
    })
  });

  document.querySelector('#header-bottom__button-1').addEventListener('click', function() {
    document.querySelector('#dropdown-1').classList.toggle('active');
    document.querySelector('#dropdown-2').classList.remove('active');
    document.querySelector('#dropdown-3').classList.remove('active');
    document.querySelector('#dropdown-4').classList.remove('active');
    document.querySelector('#dropdown-5').classList.remove('active');
    document.querySelector('#header-bottom__icon-1').classList.toggle('active');
    document.querySelector('#header-bottom__icon-2').classList.remove('active');
    document.querySelector('#header-bottom__icon-3').classList.remove('active');
    document.querySelector('#header-bottom__icon-4').classList.remove('active');
    document.querySelector('#header-bottom__icon-5').classList.remove('active');
  });

  document.querySelector('#header-bottom__button-2').addEventListener('click', function() {
    document.querySelector('#dropdown-1').classList.remove('active');
    document.querySelector('#dropdown-2').classList.toggle('active');
    document.querySelector('#dropdown-3').classList.remove('active');
    document.querySelector('#dropdown-4').classList.remove('active');
    document.querySelector('#dropdown-5').classList.remove('active');
    document.querySelector('#header-bottom__icon-1').classList.remove('active');
    document.querySelector('#header-bottom__icon-2').classList.toggle('active');
    document.querySelector('#header-bottom__icon-3').classList.remove('active');
    document.querySelector('#header-bottom__icon-4').classList.remove('active');
    document.querySelector('#header-bottom__icon-5').classList.remove('active');
  });

  document.querySelector('#header-bottom__button-3').addEventListener('click', function() {
    document.querySelector('#dropdown-1').classList.remove('active');
    document.querySelector('#dropdown-2').classList.remove('active');
    document.querySelector('#dropdown-3').classList.toggle('active');
    document.querySelector('#dropdown-4').classList.remove('active');
    document.querySelector('#dropdown-5').classList.remove('active');
    document.querySelector('#header-bottom__icon-1').classList.remove('active');
    document.querySelector('#header-bottom__icon-2').classList.remove('active');
    document.querySelector('#header-bottom__icon-3').classList.toggle('active');
    document.querySelector('#header-bottom__icon-4').classList.remove('active');
    document.querySelector('#header-bottom__icon-5').classList.remove('active');
  });

  document.querySelector('#header-bottom__button-4').addEventListener('click', function() {
    document.querySelector('#dropdown-1').classList.remove('active');
    document.querySelector('#dropdown-2').classList.remove('active');
    document.querySelector('#dropdown-3').classList.remove('active');
    document.querySelector('#dropdown-4').classList.toggle('active');
    document.querySelector('#dropdown-5').classList.remove('active');
    document.querySelector('#header-bottom__icon-1').classList.remove('active');
    document.querySelector('#header-bottom__icon-2').classList.remove('active');
    document.querySelector('#header-bottom__icon-3').classList.remove('active');
    document.querySelector('#header-bottom__icon-4').classList.toggle('active');
    document.querySelector('#header-bottom__icon-5').classList.remove('active');
  });

  document.querySelector('#header-bottom__button-5').addEventListener('click', function() {
    document.querySelector('#dropdown-1').classList.remove('active');
    document.querySelector('#dropdown-2').classList.remove('active');
    document.querySelector('#dropdown-3').classList.remove('active');
    document.querySelector('#dropdown-4').classList.remove('active');
    document.querySelector('#dropdown-5').classList.toggle('active');
    document.querySelector('#header-bottom__icon-1').classList.remove('active');
    document.querySelector('#header-bottom__icon-2').classList.remove('active');
    document.querySelector('#header-bottom__icon-3').classList.remove('active');
    document.querySelector('#header-bottom__icon-4').classList.remove('active');
    document.querySelector('#header-bottom__icon-5').classList.toggle('active');
  });

  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
  });

  var swiper1 = new Swiper ('.gallery-slider__container', {
    navigation: {
      nextEl: '.gallery-slider__btn-next',
      prevEl: '.gallery-slider__btn-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  document.querySelectorAll('.catalog-accordion__years').forEach(function(catalogAccordion) {
    catalogAccordion.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-accordion__icon').forEach(function(sectionQueItem) {
        sectionQueItem.classList.remove('catalog-accordion__icon--active')
      });
      
      document.querySelector(`[data-target="${path}"]`).classList.toggle('catalog-accordion__icon--active')
    });
  });

  document.querySelectorAll('.catalog-accordion__btn-italy').forEach(function(catalogAccordion) {
    catalogAccordion.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-content__italy').forEach(function(sectionQueItem) {
        sectionQueItem.classList.remove('catalog-content__italy--active')
      });
      
      document.querySelector(`[data-target="${path}"]`).classList.toggle('catalog-content__italy--active')
    }); 
  });

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });

  $(".catalog-accordion").accordion({
    heightStyle: "content"
  });

  var swiper2 = new Swiper ('.events-slider__container', {
    navigation: {
      nextEl: '.events-slider__btn-next',
      prevEl: '.events-slider__btn-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  tippy('.projects__icon-1', {
    content: 'Пример современных тенденций - современная методология разработки',
    arrow: false,
    theme: 'purple',
  });

  tippy('.projects__icon-2', {
    content: 'В стремлении повысить качество',
    arrow: false,
    theme: 'purple',
  });

  tippy('.projects__icon-3', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    arrow: false,
    theme: 'purple',
  });

  var swiper3 = new Swiper ('.projects-slider__container', {
    navigation: {
      nextEl: '.projects-slider__btn-next',
      prevEl: '.projects-slider__btn-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var mapOne = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.758468, 37.601088],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 15
      });

      var placemarkOne = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/320/icon/location.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
      });

      // Размещение геообъекта на карте.
      mapOne.geoObjects.add(placemarkOne); 
  }
});