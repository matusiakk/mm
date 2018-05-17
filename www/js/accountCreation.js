//Tworzenie nowego konta

$('#button').click(
    
    function createNewAccount(){    
        
        var email = $("#emailField").val();
        var password = $("#pswdField").val();
        var regex = RegExp("[0-9]");
        
        if (email == "" ){

            alert("Email field cannot be blank");
        }
        
        if(password.length<8 || !regex.test(password)){
            alert("The password must have at least 8 characters and at least 1 digit");

        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                
                if(errorCode == "auth/weak-password"){

                    alert("Your password is too weak");

                }
            });
            
            $(function(){
                $("#emailField").val("");
                $("#pswdField").val("");
                

            alert("Account created successully!");
        });
        };
    });