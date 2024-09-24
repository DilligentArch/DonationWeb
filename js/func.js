function getInput(id) {
    const inputValue = document.getElementById(id).value;

    return inputValue;
}
function getInnerValue(id) {
    const temp = document.getElementById(id).innerText;
    const val = parseFloat(temp);
    return val;
}

function appenChild(id, val) {
    document.getElementById(id).appendChild(val);
}

function join(val, s) {
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('rounded-xl');
    div.classList.add('py-5');
    div.classList.add('pt-2');
    div.classList.add('mb-5');
    const h = document.createElement('h3');
    h.innerText = `
        ${val} Taka is donated for ${s}.
        `;
    h.classList.add('text-xl');
    h.classList.add('text-bold');
    
    div.appendChild(h);
    


    return div;
}