function addTabIndex(){

    alert("This is my final project");
    array = document.getElementsByClassName("preview");
    
    for(var i = 0; i < array.length; i++){
        array[i].setAttribute("tabindex", "0");
    }

    console.log("Loaded successfully");
}

function upDate(previewPic){

    let x = document.getElementById("image");
    var url = "url('" + previewPic.src + "')";

    x.style.backgroundImage = url;
    x.innerHTML = previewPic.alt;

    console.log("Updated successfully");
}

function unDo(){

	let x = document.getElementById("image");
    
    x.style.backgroundImage = "url('" + '' + "')";
    x.innerHTML = "Hover over an image below to display here.";

    console.log("Undo successfully");
}

function Focus(previewPic){

    previewPic.style.opacity = 0.5;
    previewPic.style.border = "15px solid cyan";

    console.log("Focus on image");
}

function Blur(previewPic){

    previewPic.style.opacity = 1;
    previewPic.style.border = "10px solid black";

    console.log("Blur!");
}

function Delete() {
    alert("A for loop will loop through all the images to delete them");

    let array = document.getElementsByClassName("preview");

    for (let i = array.length - 1; i >= 0; i--) {
        array[i].remove();
    }
}
