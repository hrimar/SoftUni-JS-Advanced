function search() { // 100/100
    const searchText = $('#searchText').val().toLowerCase();

    //let elements = $(`#towns li:contains('${searchText}')`);
// or
    const elements = $('#towns li')
        .css('font-weight', '')
        .filter((i, e) => e.textContent
            .toLowerCase().indexOf(searchText) > -1)
        .css('font-weight', 'bold');

    $('#result').text(`${elements.length} matches found.`)
}
