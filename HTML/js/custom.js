
(function ($) {

  AOS.init({
    easing: 'ease-out-sine',
    anchorPlacement: 'top-bottom',
    disable: window.innerWidth < 1200,
    once: true,
    duration: 1000
  });
 
  $(function () {
      $('[data-toggle="tooltipa"] a').tooltip();
  })

  //menu click
  $(".hamburger").click(function(){
    $("body").toggleClass("menu-open");
  });

  $('.hamburger').keypress(function (e) {
    var key = e.which;
    if(key == 13)
    {
      $('.hamburger').click();
      return false;
    }
  });

  // $(".btnSocialmedia").click(function(){
  //   $(".nav-socialmedia").toggleClass("show");
  // }); 

  // scroll top script
  $(document).ready(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.scrollup').show();
      } else {
          $('.scrollup').hide();
      }

      if ($(this).scrollTop() > 100) {
        $('.header').addClass('toTop');
      } else {
        $('.header').removeClass('toTop');
      }
    });
    
  });

  //search click
  $(".search-js").click(function(){
    $("body").toggleClass("search-open");
  });

  $('.search-js').keypress(function (e) {

    var key = e.which;

    if(key == 13)
    {
      $('.search-js').click();
      return false;
    }
  });


  /*$(document).ready(function(){
    $('.custom1').owlCarousel({
      animateOut: 'slideOutRight',
      animateIn: 'flipInY',
      items:1,
      margin:2,
      stagePadding:2,
      smartSpeed:450
    });
  });*/

  $(".slick-class-1").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false
  });

  $(".slick-class-2").slick({ 
		dots: true,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [{  
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }]
  });

  tjGalleryImage = function(){
    $('.pictures').tjGallery();
  }

  if ($(".home__gallery")[0]){
    $(window).on('load', function(){
      tjGalleryImage();
    })
  }

  $('.home__gallery__tabmenu a').on('click', function (e) {
    setTimeout(()=>{window.dispatchEvent(new Event('resize'));},200);
  })


  /*

  if ($(".imglist")[0]){
    $('[data-fancybox="imagespop"]').fancybox({
      buttons : [ 
        'close'
      ],
      thumbs : {
        autoStart : true
      }
    });
  }

  if ($(".video-gallery-item")[0]){
    $('[data-fancybox="gallery"]').fancybox({
      buttons : [ 
        'close'
      ],
      thumbs : {
        autoStart : false
      }
    });
  }

  if ($("#chart")[0]){
    
    var options = {
      series: [{
      name: 'Social Sector',
      data: [7, 7, 6, 7, 3]
    }, {
      name: 'Sports Sector',
      data: [3, 7, 5, 9, 6]
    },  {
      name: 'Cultural Sector',
      data: [3, 7, 5, 9, 6]
    }, {
      name: 'Charity Sector',
      data: [3, 2, 4, 6, 4]
    }],

    states: {     
      active: {
        filter: {
          type: 'none',
          value: 0,
        }
      },
    },

    chart: {
      type: 'bar',
      height: 400,
      offsetX: 0,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 1,
        left: 3,
        blur: 6,
        color: '#000000',
        opacity: 0.1,
      },
      margin: {
        left: 5,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false, 
        columnWidth: '55%'
      } 
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['2016', '2017', '2018', '2019', '2020'],
      labels: {
        style: {
            colors: '#ffffff',
            fontSize: '18px',
            fontFamily: 'Cairo',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label',
        },
      },
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      },
    },
    yaxis: {
      labels: {
        style: {
            colors: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Cairo',
            fontWeight: 600,
        },
      }, 
    },
    
    fill: {
      opacity: 1,
      colors: ['#058FB2', '#75FFC7', '#42EAEA', '#FECAC2', ] 
    },

    colors: ['#058FB2', '#75FFC7', '#42EAEA', '#FECAC2',],

    legend: {
      horizontalAlign: 'left',      
      onItemClick: {
        toggleDataSeries: false
      },
    },
    
    tooltip: {
      enabled: false,
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        },
      }
    }
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();     
  } */

  $(".slick-class-3").slick({
    centerMode: false,
    centerPadding: '0',
    slidesToShow: 1,
    infinite: false,
    rtl: ($('html').attr('lang') == 'ar') ? true:false,
    dots: false,
    responsive: [{
  
        breakpoint: 1284,
        settings: {
          arrows: false,
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }]
  });  

  $(".slick-class-4").slick({
    centerMode: false,
    centerPadding: '0',
    slidesToShow: 1,
		infinite: false,
    dots: false,
    // the magic
    responsive: [{  
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }  
      }]
  });    
  
  $(".slick-class-5").slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    // the magic
    responsive: [{
  
        breakpoint: 1320,
        settings: {
          centerPadding: '0',
        }
  
      }, {
  
        breakpoint: 575,
        settings: {
          centerPadding: '0',
        }
  
      }]
  });


})(jQuery);