number=document.querySelector('#number');
answer=document.querySelector('#answer');
btn1=document.querySelector('#btn1');
btn1.addEventListner('click',()=>{
     answer.value=number.value;
})
