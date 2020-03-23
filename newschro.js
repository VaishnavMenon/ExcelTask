	
/*Function used as default state or when cancel button of popup is clicked*/
    function openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("middle").style.display = "none";
    }

/*Function used when Signup button of main page is clicked*/
    function closeForm() {
        document.getElementById("myForm").style.display = "none";    
        document.getElementById("middle").style.display = "block";
    }
	
/*Function to check if password and confirm password match*/
    function passcheck(){
        var pass = document.getElementById("password").value;
        var cpass = document.getElementById("confirmpassword").value;
        if(pass!=cpass)
        {
            alert('Password and Confirm Password do not match');
            document.getElementById("password").value='';
            document.getElementById("confirmpassword").value='';
        }
	}
	    
/*Function to clear all inputs entered by user after signup and also when cancel is clicked*/    
    function clearinputs()
    {
        document.getElementById("signupform").reset();
    }



/***************************************************************************************************************/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
/***************************************************************************************************************/