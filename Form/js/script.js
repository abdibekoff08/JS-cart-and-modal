let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    closeReceiveBtn = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

function hover () {
    heading.textContent = "Действительно все!"
}

chooseBtn.addEventListener('click', function hover () {
    heading.textContent = "Действительно все!"
});
chooseBtn.addEventListener('mouseleave', function hover () {
    heading.textContent = "Все включено!"
});


receiveBtn.addEventListener('click', function() {
    modal.style.display = 'block';
})

closeReceiveBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})

nameInput.addEventListener('input', function() {
    text.value = `Меня зовут ${nameInput.value}. И я хочу спросить:`
})


