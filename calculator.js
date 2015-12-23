
var depositName = {
    'standart': {
        name: 'standart',
        percent: {
            1: 0.1,
            3: 0.12,
            6: 0.15,
            12: 0.17
        }
    },
    'premium': {
        name: 'premium',
        percent: {
            1: 0.12,
            3: 0.15,
            6: 0.17,
            12: 0.19
        }
    },
    'vip': {
        name: 'vip',
        percent: {
            1: 0.15,
            3: 0.17,
            6: 0.19,
            12: 0.22
        }
    }
}

$('button [id = "button"]').on('click', function () {
    var name = $('select[name="deposit-name"]').val();
    var percent = $('select[name="term-deposit"]').val();
    var money = $ ('textarea [id= "money"]').val();
     function calc () {
         if (money < 1000) {
             alert("You don't have enough money");
         }
         else if (money > 1000) {
             var calc = money + (money * percent);
             return (calc);
         }
     }
    $('.result').html(
        "Вы выбрали депозит: " + depositName[dName].name +
        "Процентная ставка по депозиту составила: " + depositName[dName].percent[dPersent] +
        "В конце срока вы получите: " + calc
    );
});

