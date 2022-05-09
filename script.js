

const keyboard = [113,119,101,114,116,121,117,105,111,112,91,93,97,115,
    100,102,103,104,106,107,108,59,39,122,120,99,118,98,110,109,44,46,47,32]


// document.onkeypress = function(event){
// console.log(event)
// keyboard.push(event.charCode)
// console.log(event.key)
// }

function init(){
    let out = '';
    for(let i = 0; i < keyboard.length; i++){
        if(i === 12 || i === 23 || i === 33){
            out += '<div class= "clearfix"></div>';
        }
        out += '<div class = "k-key" data ="'+ keyboard[i] +'">'+String.fromCharCode(keyboard[i])+'</div>';
        
    } 
    
    document.querySelector('#keyboard').innerHTML = out;
   
} 
init()

let display = document.querySelector('.display');

document.onkeypress = function(event){
    
  document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data = "'+event.keyCode +'"] ').classList.add('active');
    display.textContent += event.key;
   
}

document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');    
    })
let code = this.getAttribute('data') ;
this.classList.add('active');
console.log(code)

    }
})

console.log(`Minimal scope:
1.реализована генерация DOM-элементов. body в index.htmlпусто +20
2.щелчки мышью по кнопкам виртуальной клавиатуры или нажатия кнопок 
на физической клавиатуре вводят символы в поле ввода (текстовую область):+15(оеализовано не полностью)
3.реализована анимация нажатия клавиши:+15`)