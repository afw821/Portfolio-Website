
(function ($) {
    $(document).ready(function () {
       

        //This function is what shows the pictures in the about me section when the button is clicked

        const showAbout = function () {
            $('.card').removeClass('hide');
            $('.link-btn3').addClass('hide');
            $('.link-btn4').removeClass('hide');
            $('.card-col-two').addClass('hide');
        }
        $('.link-btn3').on('click', showAbout);

        //This function will collapse the images in the about section 

        const collapseSlideShow = function () {
            $('.card').addClass('hide');
            $('.link-btn3').removeClass('hide');
            $('.link-btn4').addClass('hide');
        }
        $('.link-btn4').on('click', collapseSlideShow);

        //This shows the contact form when the contact me button is clickedd on the bottom of the page
        const showContact = function () {

            const contactForm = (`<div class="row d-flex justify-content-center text-center page-row">
    <div class="col-md-6">
    
<form>
    <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" required>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" required>
            </div>
          </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
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

        //This scrolls to the section of the page when the link on the navbar is clicked
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });

    });
})(jQuery);