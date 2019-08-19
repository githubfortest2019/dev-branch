var $form = $('#form');
var $surname_name = $('#surname_name');
var $email = $('#email');
var $phone = $('#phone');
var $activity = $('#activity');

$('#fill_form').on('click', function() {
	$('html, body').animate({
        scrollTop: $("#about_you").offset().top
    }, 500);
});

$('#button_send').on('click', function() {
	$form.validate({
        ignore: "",
        rules: {
            surname_name: {
                required: true
            },
            email: {
            	required: true,
            	email: true
            },
            phone: {
            	required: true,
            	number: true
            },
            activity: {
                required: true
            },
        },
        messages: { 
            surname_name: {
                required: "Введите фамилию и имя"
            },
            email: {
            	required: "Введите E-mail",
            	email: "E-mail должен быть в формате user_name@domain.com"
            },
            phone: {
            	required: "Введите номер телефона",
            	number: "Введите корректный номер телефона"
            },
            activity: {
            	required: "Заполните поле"
            }
        }
    });

    if ($form.valid()) {
    	swal("Успешно!", "Данные успешно отправлены", "success");
    	$surname_name.val("");
    	$email.val("");
    	$phone.val("");
    	$activity.val("");
    }
});