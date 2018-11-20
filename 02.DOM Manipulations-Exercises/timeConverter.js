function attachEventsListeners() {  // 100/100
    const btnDay = document.getElementById('daysBtn');
    btnDay.addEventListener('click', dayConvert)
    const btnHour = document.getElementById('hoursBtn');
    btnHour.addEventListener('click', hourConvert)
    document.getElementById('minutesBtn')
        .addEventListener('click', minConvert)
    document.getElementById('secondsBtn')
        .addEventListener('click', secConvert)

    function dayConvert() {
        const day = document.getElementById('days').value;
        const hour = document.getElementById('hours');
        hour.value = +day * 24;
        const min = document.getElementById('minutes');
        min.value = +day * 1440;
        const sec = document.getElementById('seconds');
        sec.value = +day * 86400;
    }

    function hourConvert() {
        const hour = document.getElementById('hours').value;
        document.getElementById('days').value = +hour / 24;
        document.getElementById('minutes').value = +hour * 60;
        document.getElementById('seconds').value = +hour * 60 * 60;
    }

    function minConvert() {
        const min = document.getElementById('minutes').value;
        document.getElementById('days').value = +min / (24*60);
        document.getElementById('hours').value = +min / 60;
        document.getElementById('seconds').value = +min * 60;
    }
    function secConvert() {
        const sec = document.getElementById('seconds').value;
        document.getElementById('minutes').value = +sec /60;
        document.getElementById('hours').value = +sec /60/60;
        document.getElementById('days').value = +sec/24/60/60;
    }
}