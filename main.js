/*setTimeout(()=>{
  
  let akash=prompt('  HI IAM AKASH  PLEASE ENTER YOUR NAME');


alert('Hello '+akash+' welcome to  our website');
},9000)*/

/*::::::::: hamburger menu::::::::*/
let nav=document.querySelector('.nav')
let bars=document.querySelector('.fa-bars')
let cancel=document.querySelector('.fa-close')

bars.onclick=function(){
  nav.style.transform='translateX(0)';
  }
cancel.onclick=function(){
  nav.style.transform='translateX(100%)';
}
nav.onclick=function(){
  nav.style.transform='translateX(100%)';
}

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*:::::::::About input:::::::::::*/
 
 

 var btn=document.querySelector('.asign');
 var amail=document.getElementById('amail');
 var input=document.querySelector('.ainput');
 var chek=document.querySelector('.chek');
 
 btn.onclick=function(){
   if(input.value==''){
     chek.innerHTML='**please fill your email';
     chek.style.color='red'
   }
   else{
     setTimeout(()=>{
        chek.innerHTML='thank you sir/mam';
        chek.style.color='red'
chek.style.fontsize='9rem'
     },2000)
   input.value='loading.....'
   setTimeout(()=>{
input.value=':::::YOUR EMAIL IS NOW VARIFIED:::::';
input.style.color='orange'
   },2000)
   
 }
}
 /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
 let mainRow=document.querySelector('.animatednumber');
const workSection= new IntersectionObserver((entries,observer)=>{
  const[entry]=entries;
  
  if(entry.isIntersecting==false) return;
  
  let animated=document.querySelectorAll('.animated');
 let speed=200;
 animated.forEach((curElem)=>{
   
   const updateNumber=()=>{
     
     const targetNumber=parseInt(curElem.dataset.number);
     
     const main=parseInt(curElem.innerHTML);
     const time=Math.trunc(targetNumber/speed);
     if(main<targetNumber){
       curElem.innerHTML=main+time+' +';
       setTimeout(updateNumber,20)
     }
   }
 updateNumber()
 })
  observer.unobserve(mainRow);
 }

,{
   root:null,
   threshold:0,
 })
 workSection.observe(mainRow);
 
 