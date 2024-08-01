var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("add-popup")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel=popup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//add-note,title-input,notes-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-note")
var booktitleinput=document.getElementById("title-input")
var booknotesinput=document.getElementById("notes-input")

// try another way

// var booknotesinputone=document.getElementById("notes-input")
// var booknotesinputtwo=document.getElementById("notes-input")
// var booknotesinputthree=document.getElementById("notes-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <p  style="font-size: 20px;">
    
        ${booknotesinput.value.replace(/\n/g, "<br><br>" )}
    </p>
   
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

  
function deletebook(event)
{
    event.target.parentElement.remove()
}  

