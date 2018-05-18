//tworzenie nowego konta

$('#newAccount').click(

    function createNewAccount() {

        let email = $("#emailField").val();
        let password = $("#pswdField").val();
        let regex = RegExp("[0-9]");

        if (email == "") {

            alert("Podaj swój adres email");
        }

        if (password.length < 8 || !regex.test(password)) {
            alert("Twoje hasło powinno składać się z minimum 8 znaków, w tym minimum 1 cyfry");

        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage)

                if (errorCode == "auth/weak-password") {

                    alert("Twoje hasło jest za słabe");

                }
            });

            $(function () {
                $("#emailField").val("");
                $("#pswdField").val("");
                alert("Konto zostało utworzone!");
                window.location.replace("./welcome.html");
            });
        };
    });
