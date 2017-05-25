$(document).ready(function () {
    validateForm();
});
function validateForm() {
    $('#contactForm').validate({
            rules: {
                name : {
                    required : true,
                    minlength: 2,
                    maxlength: 12
                },
                surname : {
                    required : true,
                    minlength: 2,
                    maxlength: 12
                },
                email : {
                    required : true,
                    email : true
                },
                problem : {
                    required : true,
                    minlength : 6
                }
            },
            messages: {
                name: "Podaj poprawne imię!",
                surname: "Podaj poprawne nazwisko!",
                email: "Podaj poprawny email!",
                problem: "Opisz nam swój problem!"
            }

        }
    )
}