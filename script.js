function submit(){
  var valEle = document.body.querySelector(".valMess");
  
  var username =document.body.querySelector(".username").value;
  var password =document.body.querySelector(".password").value;
  
  if(username==="coolStudent123"&&password==="coolStudent123"){
    var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var x = 0
var pages = [
  {
    title:"Home",
    content:"Home content"
  },
  {
    title:"About",
    content:"Some about content"
  },
  {
    title:"Interact",
    content:"none"
  }
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg =="Interact"){
    display.innerHTML="";
    var heading = document.createElement("h1");
    heading.innerHTML="Interact";
    display.appendChild(heading);
    var button = document.createElement("button");
button.innerHTML = "enter";
    var body = document.getElementsByTagName("body")[0];
var x = body.appendchild(text);




body.appendChild(button);
    button.addEventListener ("click", function() {
      var enter = document.createElement("h3");
    enter.innerHTML=x;
    display.appendChild(enter);
    

});
  }
  if (pg =="Home"){
    display.innerHTML="";
    var heading = document.createElement("h1");
    heading.innerHTML="Home";
    display.appendChild(heading);
  }
  if (pg =="About"){
    display.innerHTML="";
    var heading = document.createElement("h1");
    var Name = document.createElement("h3");
    heading.innerHTML="About";
    Name.innerHTML="Jordan Miller";
    display.appendChild(heading);
    display.appendChild(Name);

  }
}
writeStuff(pages[0].content, "Home");
  }else if(username==="coolStudent123"){
    valEle.innerHTML="Incorrect Password"
  }
  else if(password==="coolStudent123"){
    valEle.innerHTML="Incorrect username"
}
  else{valEle.innerHTML="Incorrect username and password"}
}
document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})