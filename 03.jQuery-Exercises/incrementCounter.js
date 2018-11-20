function increment(selector) { // 100/100 ?
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textArea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'true');

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    //Events:
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1)
    });
    $(addBtn).on('click', function () {
       let li = $(`<li>${textArea.val()}</li>li>`);
       li.appendTo(list)
    });

    // add our elements to the DOM:
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}

// function increment(selector) {
//     let container = $(selector);
//
//     // Get needed references
//     let textArea = $('<textarea>')
//         .addClass('counter')
//         .val('0')
//         .attr('disabled', true);
//
//     let unorderedList = $('<ul>')
//         .addClass('results');
//
//     // Append initial elements
//     container.append(
//         textArea,
//         // $('<button>', { class: 'btn', id: 'incrementBtn', text: 'Increment' }) // Works the same way
//         $('<button class="btn" id="incrementBtn">Increment</button>')
//             .click(() => textArea.val(Number(textArea.val()) + 1)),
//         $('<button class="btn" id="addBtn">Add</button>')
//             .click(() => unorderedList.append($('<li>').text(textArea.val()))),
//         unorderedList
//     );
// }