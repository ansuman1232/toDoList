let d=document.querySelector("div");
let u=document.querySelector("ul");
let l=document.querySelectorAll("li");
d.addEventListener("click",function(){
    console.log("div is active");

});

//ul================
u.addEventListener("click",function(){
    console.log("ul is active");
})

//li=============
for( let i=0;i<l.length;i++ ){
    
l[i].addEventListener("click",function(e){
    e.stopPropagation();//here parent elemens will not be active.
    console.log("li is active");
});}
//bulding to do list=============
let in1=document.querySelector("#addItems");
 u=document.querySelector("#tlis");
let btn=document.querySelector("button");
 btn.addEventListener("click",function(){
    let lt=document.createElement("li");
    u.append(lt);
    let rbtn=document.createElement("button");
    rbtn.innerText="X";
    lt.innerText=in1.value;
    lt.append(rbtn);
    //methode1:-
    // rbtn.addEventListener("click",function(){
    //     lt.remove();
        
    // })
    
    in1.value="";
 })

 //methode2:-
 //delete button using event bubbling or event Deligation.
 //here first added event to ul
 //then as soon as child pressed due to bubbling 
 // ul will triger
 //then using e.traget identified who due to whom the event occured
 //then store it's parent element
 //remove it.
 u.addEventListener("click",function(e){
    console.dir(e.target);
    if(e.target.nodeName=="BUTTON"){
        let item=e.target.parentElement;
        console.log("button");
        item.remove();
    }
    else{
        console.log("not button");
    }
 })