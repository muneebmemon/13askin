  $('.homeCreams').slick({
    centerMode: true,
    centerPadding: '30px',
    prevArrow:"<img class='a-left control-c prev slick-prev' src='/SVG/left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/SVG/right.svg''>",
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
    prevArrow:"<img class='a-left control-c prev slick-prev' src='/SVG/left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='/SVG/right.svg''>",
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