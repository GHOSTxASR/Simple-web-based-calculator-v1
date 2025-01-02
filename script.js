let b1=document.querySelector('#b1');
let b2=document.querySelector('#b2');
let b3=document.querySelector('#b3');
let b4=document.querySelector('#b4');
let b5=document.querySelector('#b5');
let b6=document.querySelector('#b6');
let b7=document.querySelector('#b7');
let b8=document.querySelector('#b8');
let b9=document.querySelector('#b9');
let b0=document.querySelector('#b0');

let add=document.querySelector('#add');
let sub=document.querySelector('#sub');
let mul=document.querySelector('#mul');
let div=document.querySelector('#div');
let eq=document.querySelector('#eq');
let clr=document.querySelector('#clr');
let cut=document.querySelector('#cut');
let display=document.querySelector('#display');
let theme=document.querySelector('#theme');


function adjustFontSize() {
    const div = document.getElementById('display');  // Get the div element
    let fontSize = 50;  // Starting font size
    const minFontSize = 30;  // Minimum font size

    // Check if the text overflows
    while (div.scrollHeight > div.clientHeight && fontSize > minFontSize) {
        fontSize--;  // Decrease the font size
        div.style.fontSize = fontSize + 'px';  // Apply the new font size
    }
}

// Call the function on page load or after content change
window.onload = adjustFontSize;
display.addEventListener('resize', adjustFontSize);

// Call the function on page load or after content change
window.onload = adjustFontSize;

let value=0,result=0,op=0,flag=0;
b1.addEventListener('click',()=>{
    
    if(flag==0){
        value=value*10+1;
    }
    else{
        value=1;
        flag=0;
    }
    display.innerHTML=value;
});
b2.addEventListener('click',()=>{
    
    if(flag==0){
        value=value*10+2;
    }
    else{
        value=2;
        flag=0;
    }
    display.innerHTML=value;
});
b3.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+3;
    }
    else{
        value=3;
        flag=0;
    }
    display.innerHTML=value;
    console.log(value);
});
b4.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+4;
    }
    else{
        value=4;
        flag=0;
    }
    display.innerHTML=value;
});
b5.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+5;
    }
    else{
        value=5;
        flag=0;
    }
    display.innerHTML=value;
});
b6.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+6;
    }
    else{
        value=6;
        flag=0;
    }
    display.innerHTML=value;
});
b7.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+7;
    }
    else{
        value=7;
        flag=0;
    }
    display.innerHTML=value;
});
b8.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+8;
    }
    else{
        value=8;
        flag=0;
    }
    display.innerHTML=value;
});
b9.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+9;
    }
    else{
        value=9;
        flag=0;
    }
    display.innerHTML=value;
});
b0.addEventListener('click',()=>{
    if(flag==0){
        value=value*10+0;
    }
    else{
        value=0;
        flag=0;
    }
    display.innerHTML=value;
});

clr.addEventListener('click',()=>{
    value=0;
    display.innerHTML=value;
});

cut.addEventListener('click',()=>{
    value=Number.parseInt(value/10);
    display.innerHTML=value;
});

add.addEventListener('click',()=>{
    display.innerHTML= "+";
    if(result==0){
        result=value;
    }
    op=1;
    flag=1;
});
sub.addEventListener('click',()=>{
    
    display.innerHTML= "-";
    if(result==0){
        result=value;
    }
    op=2;
    flag=1;
});
mul.addEventListener('click',()=>{
    
    display.innerHTML= "*";
    if(result==0){
        result=value;
    }
    op=3;
    flag=1;
});
div.addEventListener('click',()=>{
    
    display.innerHTML= "/";
    if(result==0){
        result=value;
    }
    op=4;
    flag=1;
});



eq.addEventListener('click',()=>{    
    if(op==1){
        result=result+value;
    }else if(op==2){
        result=result-value;
    }else if(op==3){
        let temp=(result*value);
        result=temp;   
    }else if(op==4){
        let temp=(result/value);
        result=temp.toFixed(3);
    }
    
    display.innerHTML=result;
    adjustFontSize();
    value=result;
    result=0;
    flag=1;
    result=0;
});

let mode=1;
theme.addEventListener('click',()=>{
    if(mode==1){
        document.body.style.backgroundColor="#E8E7AB";
        document.getElementById('base').style.backgroundColor="#C30E59";
        document.getElementById('display').style.backgroundColor="#F2AE66";
        document.getElementById('display').style.color="black";
        document.getElementById('numeric').style.backgroundColor="#E82561";
        mode=3;
    }else if(mode==0){
        document.body.style.backgroundColor="#F5F5DC";
        document.getElementById('base').style.backgroundColor="#262626";
        document.getElementById('display').style.backgroundColor="#333333";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#58595a";
        mode=1;
    }
    else if(mode==3){
        document.body.style.backgroundColor="#F5EFE7";
        document.getElementById('base').style.backgroundColor="#213555";
        document.getElementById('display').style.backgroundColor="#3E5879";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#D8C4B6";
        mode=4;
    }
    else if(mode==4){
        document.body.style.backgroundColor="#9290C3";
        document.getElementById('base').style.backgroundColor="#070F2B";
        document.getElementById('display').style.backgroundColor="#1B1A55";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#535C91";
        mode=5;
    }
    else if(mode==5){
        document.body.style.backgroundColor="#9EC8B9";
        document.getElementById('base').style.backgroundColor="#092635";
        document.getElementById('display').style.backgroundColor="#1B4242";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#5C8374";
        mode=6;
    }
    else if(mode==6){
        document.body.style.backgroundColor="#EEEEEE";
        document.getElementById('base').style.backgroundColor="#222831";
        document.getElementById('display').style.backgroundColor="#393E46";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#00ADB5";
        mode=7;
    }
    else if(mode==7){
        document.body.style.backgroundColor="#BED754";
        document.getElementById('base').style.backgroundColor="#191919";
        document.getElementById('display').style.backgroundColor="#750E21";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#E3651D";
        mode=8;
    }
    else if(mode==8){
        document.body.style.backgroundColor="#D6BD98";
        document.getElementById('base').style.backgroundColor="#1A3636";
        document.getElementById('display').style.backgroundColor="#40534C";
        document.getElementById('display').style.color="white";
        document.getElementById('numeric').style.backgroundColor="#677D6A";
        mode=0;
    }
});