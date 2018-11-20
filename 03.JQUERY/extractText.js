function extractText() {     // 100/100
     let items = $("ul#items li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");

    $("#result").text(items);

    // // or JS
    // document.getElementById('result').textContent = items;
}
