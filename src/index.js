document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("mySubmit").addEventListener("click", function(event){
  event.preventDefault()
});
document.getElementById("mySubmit").addEventListener("click", function(){
  
  let value= document.getElementById("new-task-description").value;
  if(value!=="")
  {document.getElementById("tasks").innerHTML+=`<li class="listElement"> ${value} <button type="button"> Delete </button></li>`;}
})
  let buttons = document.getElementsByTagName("button");
  let list= document.getElementsByClassName("listElement");
for(let i=0;i<buttons.length;i++){
document.buttons[i].addEventListener("click",but);
}
function but(){
  for(i=0;i<list.length;i++){
  document.list[i].innerText=" ";
}
}
  
  
});
