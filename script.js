let entries = [];
const entriesWrapper = document.querySelector('#entries');


function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
    return total + currentValue;
}

function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

function calcAvg() {
    const avg = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = avg;
}

function handleSubmit(e) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);

    addNewEntry(entry);
    calcTotal();
    calcAvg();
}



const form = document.querySelector('form').addEventListener('submit', handleSubmit);