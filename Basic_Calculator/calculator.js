let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let content =document.getElementById('content');
let btnadd =document.getElementById('btn+');
let btnsub =document.getElementById('btn-');
let btnequals=document.getElementById('btn=');
let btnDel=document.getElementById('btnx');
let btnAc=document.getElementById('btnAc');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');
let btn5=document.getElementById('btn5');
let btn6=document.getElementById('btn6');
let btn7=document.getElementById('btn7');
let btn8=document.getElementById('btn8');
let btn9=document.getElementById('btn9');
let btn0=document.getElementById('btn0');
let btnMultiply=document.getElementById('btn*');
let btnDivide=document.getElementById('btn/');
let btnDecimal=document.getElementById('btn.');
//all buttons
btn1.addEventListener("click",()=>{
content.innerText +="1";
})
btn2.addEventListener("click",()=>{
    content.innerText +="2";
    })
    
 btn3.addEventListener("click",()=>{
        content.innerText +="3";
        })  
        
btn4.addEventListener("click",()=>{
    content.innerText +="4";
     })
btn5.addEventListener("click",()=>{
        content.innerText +="5";
         })
         btn6.addEventListener("click",()=>{
            content.innerText +="6";
             })
             btn7.addEventListener("click",()=>{
                content.innerText +="7";
                 })
                 btn8.addEventListener("click",()=>{
                    content.innerText +="8";
                     })
                     btn9.addEventListener("click",()=>{
                        content.innerText +="9";
                         })
                         btn0.addEventListener("click",()=>{
                            content.innerText +="0";

                             })
                            
  //ALL OPERATIONS ARE HERE 
  //add                          
btnadd.addEventListener("click",()=>{
    content.innerText +="+";
})
//subtract
btnsub.addEventListener("click",()=>{
    content.innerText +="-";
})
//multiply
btnMultiply.addEventListener("click",()=>{
    content.innerText +="*";   
})
//divide
btnDivide.addEventListener("click",()=>{
    content.innerText +="/";
})
//decimal
btnDecimal.addEventListener("click",()=>{
    content.innerText +=".";
})
//delete
btnDel.addEventListener("click",()=>{
    content.innerText = content.innerText.slice(0, -1);//here -1 is last index which is not included (start, index-1)
})
//clear
btnAc.addEventListener("click",()=>{
    content.innerText="";
})
//equals
btnequals.addEventListener("click",()=>{
    //in this the expression  stored the content that the user wrote in content-div then in a expression variable  it  stores in the form of string then it giver to a function whic is return + expression then the compiller does arithmetic opertaion on the conten and return to result and this result will sow on the content-div
    let expression = content.innerText;
    try {
        let result = Function('return ' + expression)();
        content.innerText = result;
    } catch (e) {
        content.innerText = "Error";
    }
})