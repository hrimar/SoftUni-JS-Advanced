function timer() {
    const hours = $('#hours');
    const minutes = $('#minutes');
    const seconds = $('#seconds');

    let timer = null;

    $('#start-timer').on('click', function () {
        if (timer === null) {
            timer = setInterval(tick, 1000);
        }
    })

    $('#stop-timer').on('click', function () {
        if (timer !== null) {
           clearInterval(timer);
           timer= null;
        }
    })

    let sec=0;
    function tick() {
        // var.2: // 100/100
        sec++;
        hours.text(('0' + Math.floor(sec/60/60)).slice(-2));
        minutes.text(('0' + Math.floor(sec/60) % 60).slice(-2));
        seconds.text(('0' + Math.floor(sec % 60)).slice(-2));

        // var.1: // 100/100
        // let currentSecond = Number(seconds.text()) + 1;
        // if (currentSecond === 60) {
        //     currentSecond = 0;
        //
        //     let currentMinute = Number(minutes.text()) + 1;
        //     if (currentMinute === 60) {
        //         currentMinute = 0;
        //         hours.text(('0' + Number(hours.text()) + 1).slice(-2));
        //     }
        //
        //     minutes.text(('0' + currentMinute).slice(-2));
        // }
        //
        // seconds.text(('0' + currentSecond).slice(-2));
    }
}