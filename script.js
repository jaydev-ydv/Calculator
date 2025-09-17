let string="";
let currentInput="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
      if(e.target.innerHTML== '='){
      string= eval(string);
      document.querySelector('input').value=string;
      }
      else if(e.target.innerHTML== 'AC'){
      string= "";
      document.querySelector('input').value=string;
      }
      else if(e.target.innerHTML== 'x'){
      string+= "*";
      document.querySelector('input').value=string;
      }
      else if(e.target.innerHTML == '%') {
      string = (parseFloat(string) / 100).toString();
      document.querySelector('input').value = string;
     }
     else if(e.target.innerHTML == '⌫') {
    string = string.slice(0, -1);
    document.querySelector('input').value = string;    
    }
   else if (e.target.innerHTML == '()') {
    // Count existing brackets
    let openCount = (string.match(/\(/g) || []).length;
    let closeCount = (string.match(/\)/g) || []).length;

    if (openCount > closeCount) {
        string += ')';
    } else {
        if (/[0-9)]$/.test(string)) {
            string += '*(';
        } else {
            string += '(';
        }
    }
    document.querySelector('input').value = string;
   }
     else{
      console.log(e.target)
      string=string + e.target.innerHTML; 
      document.querySelector('input').value=string;
      }
    })
})
