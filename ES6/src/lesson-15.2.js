function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления на визу');
    let promise = new Promise(
        function(resolve, reject) {
            setTimeout(
                function() {
                    Math.random() > .5 ? resolve({}) : reject('В визе отказано');
                },
            3000);
        }
    );
}

//регистрация в отеле
function bookHotel() {
    //..
}

//покупка билета
function buyTickets() {
    //..
}

applyForVisa(
    {},
    function(visa){
        console.info('Виза получена');
        
    }
);