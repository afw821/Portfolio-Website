// This function creates the navigation bar fading effect
(function ($) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.nav-top').fadeOut();
            } else {
                $('.nav-top').fadeIn();
            }
        });
    });
})(jQuery);

//This function is what shows the pictures in the about me section when the button is clicked
(function ($) {
    $(document).ready(function () {
        const showAbout = function () {
            $('.card').removeClass('hide');
            $('.link-btn3').addClass('hide');
            $('.link-btn4').removeClass('hide');
            $('.card-col-two').addClass('hide');
        }
        $('.link-btn3').on('click', showAbout);
    });
})(jQuery);

//This function will collapse the images in the about section 
(function ($) {
    $(document).ready(function () {
        const collapseSlideShow = function () {
            $('.card').addClass('hide');
            $('.link-btn3').removeClass('hide');
            $('.link-btn4').addClass('hide');
        }
        $('.link-btn4').on('click', collapseSlideShow);
    });
})(jQuery);



const showContact = function(){
    
    const contactForm = (`<div class="row d-flex justify-content-center text-center page-row">
    <div class="col-md-6">
    
<form>
    <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name">
            </div>
          </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </div>
  </div>`)


$('.body').addClass('hide');
$('.parallax5').removeClass('hide');
$('.parallax5').append(contactForm);


}
$('.contact-btn').on('click', showContact);





// (function ($) {
//     $(document).ready(function () {
//      const slideShow = function(){
//          $('#slider').append($('#slider img:first-of-type'));
//      }
//      $('#next').on('click', slideShow);
//     });
// })(jQuery);





// $("#Prev").click(function(){
// 	$("#Slider").append($("#Slider img:first-of-type"));
// });

// $("#Next").click(function(){
// 	$("#Slider").prepend($("#Slider img:last-of-type"));
// });



// $("#Next").click(function(){
// 	$("#Slider").append($("#Slider img:first-of-type"));
// });

// $("#Prev").click(function(){
// 	$("#Slider").prepend($("#Slider img:last-of-type"));
// });
