function getInput(id){
    const inputValue=document.getElementById(id).value;

    return inputValue;
}
function getInnerValue(id){
    const temp=document.getElementById(id).innerText;
     const val= parseFloat(temp);
     return val;
}

function appenChild(id,val){
    document.getElementById(id).appendChild(val);
}