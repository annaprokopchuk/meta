// $('.slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: true,
// });


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    dots: true,
    nav:true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
        nav:false
      },
      // breakpoint from 768 up
      1000 : {
          nav:true
      }
    }
  });


    // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  var bar = new ProgressBar.Circle(container, {
    color: '#92e451',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#92e451', width: 1 },
    to: { color: '#92e451', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = (Math.round(circle.value() * 99) + '%');
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar.text.style.fontFamily = '"Raleway", Open Sans, sans-serif';
  bar.text.style.fontSize = '2rem';

  bar.animate(1.0);  // Number from 0.0 to 1.0

  // --------

  function toggler() {
    $('[data-toggler]').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash)
        return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('is-show');
    })
  }

  toggler();

// ----------------


  // Inputmask().mask(document.querySelectorAll("input"));

  // function formIsEmpty(tag) {
  //     let index;
  //     let inputs = document.getElementsByTagName(tag);
  //     for (index = 0; index < inputs.length; ++index) {
  //         if (inputs[index].value == '') {
  //             inputs[index].classList.add("is-empty");
  //         } else {
  //             inputs[index].classList.remove("is-empty");
  //         }
  //         inputs[index].addEventListener("change", function (event) {
  //             if (event.target.value == '') {
  //                 event.target.classList.add("is-empty");
  //             } else {
  //                 event.target.classList.remove("is-empty");
  //             }
  //         });
  //     }
  // }

  // formIsEmpty('input');
  // formIsEmpty('select');

  // function formValid() {
  //   const inputs = document.querySelectorAll('input, select, textarea');

  //   for(let input of inputs) {
  //       input.addEventListener('invalid', () => {
  //           input.classList.add('is-error');
  //       }, false);

  //       input.addEventListener('blur', () => {
  //           if(input.value.length > 0) {
  //               input.checkValidity();
  //           } else {
  //               input.classList.remove('is-error');
  //           }
  //       })
  //   }
  // }

  // formValid();
});