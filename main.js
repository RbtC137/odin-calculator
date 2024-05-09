const displayBlock = document.querySelector('.display');
const buttonPanel = document.querySelector('.button-panel');
let dispStr = '';
let a = null;
let ops = null;
let b = null;
let hasOps = false;
let dotted = false;
// buttonPanel.addEventListener('click', (e) =>{console.log( isNaN(e.target.innerText))})
// buttonPanel.addEventListener('click', (e) =>{console.log( e.target.innerText.length )})
buttonPanel.addEventListener('click', (e) =>{
    let inp = e.target.innerText;
    let res;
    if(inp.length < 3){
        if(!isNaN(inp)){
            dispStr += inp;
            display();
        }else if(inp === '.'  && !dotted){
            dispStr += inp;
            dotted = true;
            display();
        }else if(isNaN(inp) && inp !== '=' && inp !== 'AC' && inp !== '.'){
            dispStr += inp;
            ops = inp;
            hasOps = true;
            dotted = false;
            display();
        }else if(inp === 'AC'){
            dispStr = '';
            a = null;
            ops = null;
            b = null;
            hasOps = false;
            dotted = false;
            display();
        }else if(hasOps && inp === '='){
            a = parseFloat(dispStr.split(ops)[0]);
            b = parseFloat(dispStr.split(ops)[1]);
            console.log(a, b)
            switch(ops){
                case '+':
                    res = add(a, b);
                    break;
                case '-':
                    res = subtract(a, b);
                break;
                case '×':
                    res = multiply(a, b);
                break;
                case '÷':
                    res = devide(a, b);
                break;
            }
            dispStr = dispStr + inp + res;
            display();
            dispStr = res;
            ops = null;
            a = res;
            b = null;
            hasOps = false;
            dotted = (a+'').includes('.')? true : false;
        }
    }
})

function display(){
    displayBlock.innerText = dispStr;
}

function calculateOps(){
    alert(233);
}

function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function devide(a, b){
    return a / b
}