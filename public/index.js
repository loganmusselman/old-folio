function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };


  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();


  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);


   if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }


   function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }
    requestAnimationFrame(scroll);
  }

  scroll();
}

document.querySelector('.jsbtn1').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.js-section1'),
    500,
    'easeOutQuad',
    () => console.log("Done")
  );
});


document.querySelector('.jsbtn2').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.contactForm'),
    300,
    'easeOutQuad',
    () => console.log("Done")
  );
});

document.querySelector('.jsbtn3').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.top'),
    300,
    'easeOutQuad',
    () => console.log("Done")
  );
});

//Code above this line is from https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

var first = document.getElementById("first");
var last = document.getElementById("last");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var firstErr = document.getElementById("firstErr");
var lastErr = document.getElementById("lastErr");
var emailErr = document.getElementById("emailErr");
var phoneErr = document.getElementById("phoneErr");

var form = document.getElementsByTagName('form')[0];

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function formValidator(event){
  var firstCheck = document.forms["form"]["firstname"].value;
  var lastCheck = document.forms["form"]["lastname"].value;
  var emailCheck = document.forms["form"]["email"].value;
  var phoneCheck = document.forms["form"]["phone"].value;

  if(firstCheck == ""){
    firstErr.innerHTML = "Please enter a first name";
    firstErr.className = "error";
    event.preventDefault();    
  } 

  if(firstCheck.length < 2){
    firstErr.innerHTML = "First name must be longer than two letters.";
    firstErr.className = "error";
    event.preventDefault();
  }

  if(firstCheck !== "" | firstCheck.length > 2){
    firstErr.innerHTML = "";
    firstErr.className = "error";
  }


  if (lastCheck == ""){
    lastErr.innerHTML = "Please enter a last name";
    lastErr.className = "error";
    event.preventDefault();
    
  }

  if(lastCheck.length < 2){
    lastErr.innerHTML = "Last name must be longer than two letters.";
    lastErr.className = "error";
    event.preventDefault();
  }

  if(lastCheck !== "" | lastCheck.length > 2){
    lastErr.innerHTML = "";
    lastErr.className = "error";
  }

   if (emailCheck == ""){
    emailErr.innerHTML = "Please enter a valid email address";
    emailErr.className = "error";
    event.preventDefault();

  }



  }






