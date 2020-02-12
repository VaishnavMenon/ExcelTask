	
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
