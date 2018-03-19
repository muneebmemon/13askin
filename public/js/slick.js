  $('.homeCreams').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('#freezer').slick({
    centerMode: false,
    slidesToShow: 6,
    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });