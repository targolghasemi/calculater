function initCalculator() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // وقتی روی اعداد و عملگرها کلیک بشه
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    //وقتی رو مساوی کلیک بشه 
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = 'Please Enter a Value';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;

        }
    })

    //وقتی رو کلیر کلیک بشه
    clear.addEventListener('click' , function (e) {
        screen.value = '';
    })
}

initCalculator();
