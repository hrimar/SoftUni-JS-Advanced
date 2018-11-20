function initializeTable() { // 100/100
    $("#createLink").on('click', createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital, true);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRowLinks();
    }

    function addCountryToTable(country, capital) {
        // if(country && capital){
            let row = $('<tr>')
                .append($("<td>").text(country))
                .append($("<td>").text(capital))
                .append($("<td>")
                    .append($("<a href='#'>[Up]</a>").on('click', moveRowUp))
                    .append($("<a href='#'>[Down]</a>").on('click', moveRowDown))
                    .append($("<a href='#'>[Delete]</a>").on('click', deleteRow)));
            row.css('display', 'none');
            $("#countriesTable").append(row);
            row.fadeIn();
        //}
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });
    }
    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });
    }
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.remove();
            fixRowLinks();
        });
    }

    function fixRowLinks() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline');

        // Hide [Up] link in first table data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        // Hide the [Down] link in the last table row
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');
    }

}


// function initializeTable() {
//     // Create button event
//     $('a#createLink').click(addTableRow);
//
//     // Get needed references
//     let countryInputBox = $('input#newCountryText');
//     let capitalInputBox = $('input#newCapitalText');
//     let rowsContainer = countryInputBox
//         .parent()
//         .parent()
//         .parent();
//
//     // Set initial rows
//     createTableRow('Bulgaria', 'Sofia');
//     createTableRow('Germany', 'Berlin');
//     createTableRow('Russia', 'Moscow');
//
//     // Fix Row Links
//     fixRowLinks();
//
//     function addTableRow() {
//         let countryName = countryInputBox.val();
//         countryInputBox.val('');
//
//         let capitalName = capitalInputBox.val();
//         capitalInputBox.val('');
//
//         createTableRow(countryName, capitalName);
//         fixRowLinks();
//     }
//
//     function createTableRow(country, capital) {
//         country = country.trim();
//         capital = capital.trim();
//         if (country.length === 0 || capital.length === 0) {
//             return;
//         }
//
//         rowsContainer.append($('<tr>')
//             .append($('<td>').text(country))
//             .append($('<td>').text(capital))
//             .append($('<td>')
//                 .append($('<a href="#">[Up]</a>').click(rowUp))
//                 .append(' ')
//                 .append($('<a href="#">[Down]</a>').click(rowDown))
//                 .append(' ')
//                 .append($('<a href="#">[Delete]</a>').click(deleteRow))
//             ).css('display', 'none')
//             .fadeIn());
//     }
//
//     function rowUp() {
//         let currentRow = $(this).parent().parent();
//
//         currentRow.fadeOut(() => {
//             currentRow.insertBefore(currentRow.prev());
//             currentRow.fadeIn();
//             fixRowLinks();
//         });
//     }
//
//     function rowDown() {
//         let currentRow = $(this).parent().parent();
//
//         currentRow.fadeOut(() => {
//             currentRow.insertAfter(currentRow.next());
//             currentRow.fadeIn();
//             fixRowLinks();
//         });
//     }
//
//     function deleteRow() {
//         let currentRow = $(this).parent().parent();
//
//         currentRow.fadeOut(() => {
//             currentRow.remove();
//             fixRowLinks();
//         });
//     }
//
//     function fixRowLinks() {
//         // Make all links visible
//         rowsContainer.children()
//             .find('a')
//             .css('display', 'inline');
//
//         // Hide first row Up link
//         rowsContainer.children()
//             .eq(2)
//             .find('a:contains("Up")')
//             .css('display', 'none');
//
//         // Hide last row Down link
//         rowsContainer.children()
//             .last()
//             .find('a:contains("Down")')
//             .css('display', 'none');
//     }
//}