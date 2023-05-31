
let firstchoice = document.querySelector(".optionone")
let other = document.querySelector(".optiontwo")
let optionOneScreen = document.querySelector(".optiononescreen")
let optionTwoScreen = document.querySelector(".optiontwoscreen")
let draymondBtn = document.querySelector(".optionthree")
let draymondscene = document.querySelector(".optiontwoend")
let shotBtn = document.querySelector(".optionfour")
let shotScene = document.querySelector(".shotscene")

firstchoice.onclick = function(){
  optionOneScreen.style.display = "none";
  optionOneScreen.style.display = "block";
};
other.onclick = function(){
  optionTwoScreen.style.display = "none";
  optionTwoScreen.style.display = "block";
};

draymondBtn.onclick = function(){
  optionTwoScreen.style.display = "none";
  draymondscene.style.display = "block";
};

shotBtn.onclick = function(){
  draymondscene.style.display = "none";
  shotScene.style.display = "block";
};






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
