//This shows the contact form when the contact me button is clickedd on the bottom of the page
const showContact = function() {
  const contactForm = (`<div class="input-container">
            <label>
              <input type="text" />
              <div class="label-text">First Name</div>
            </label>
          </div>
          <div class="input-container">
            <label>
              <input type="text" />
              <div class="label-text">Last Name</div>
            </label>
          </div>
          <div class="input-container">
          <label>
          <input type="email" />
          <div class="label-text">E-Mail</div>
        </label>
          </div>
          <div class="input-container">
          <label>
          <input type="text" />
          <div class="label-text">Message</div>
        </label>
          </div>
          <div class="label-text">E-Mail me directly at afw821@gmail.com</div>
          <button class="contact-button">Submit</button>
          <button class="Back-button">Back</button>`);

  $(".body").addClass("hide");
  $(".parallax5").removeClass("hide");
  $(".parallax5").append(contactForm);
};
$(".contact-btn").on("click", showContact);

//This function goes back to the main page when the back button and submit button is clicked on the contact form

const hideContact = function () {
$(".body").removeClass("hide");
$(".parallax5").addClass("hide");
};

$(".parallax5").on('click', ".Back-button",  hideContact);
$(".parallax5").on('click', ".contact-button",  hideContact)
// $(".parallax5").on('click', ".Back-button", hideContact)
//This scrolls to the section of the page when the link on the navbar is clicked
$('a[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        2000
      );
      return false;
    }
  }
});
