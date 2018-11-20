function attachEvents() {   // 100/100
    $('#items').on('click', 'li', select)
    $('#showTownsButton').css("display", 'none')

    function select() {
        let li = $(this);
        // if(li.attr('selected')){ // NO?
        //     debugger;
        //     li.removeAttr('selected');
        //     li.css('background', '');
        //
        // } else {
        //   li.addClass('selected');
        //     li.css('background', '#DDD');
        //    // $('#showTownsButton').css("display", 'block')
        // }

        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
            $('#showTownsButton').css("display", 'block')
        }

    }

    $('#showTownsButton').on('click', function () {
        const selected = $('li[data-selected=true]')
            .toArray()
            .map(e=>e.textContent)
           //or  .map(e => $(e).text()) !!!
            .join(', ')

        $('#selectedTowns').text(`Selected towns: ${selected}`)
    });
}
