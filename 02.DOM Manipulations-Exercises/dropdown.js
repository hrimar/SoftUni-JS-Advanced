function addItem() { // 2. 100/100
    const text1 = document.getElementById('newItemText').value;
    const text2 = document.getElementById('newItemValue').value;
    const result = text1+text2;
    const newElement = document.createElement('option');
    const menu = document.getElementById('menu');
    menu.appendChild(newElement);
    newElement.textContent = result;
    document.getElementById('newItemText').value =''
    document.getElementById('newItemValue').value= "";
}