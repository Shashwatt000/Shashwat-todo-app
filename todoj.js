var inpf = document.createElement("INPUT");
inpf.id = "div_id";
inpf.setAttribute("type","text");
inpf.style = "background-color: brown; z-index: 1; border: 4px solid green; margin-left: 500px; padding-left: 200px;";
document.body.appendChild(inpf);
let count = 0;
let countdiv =  document.createElement("div");
countdiv.innerHTML = count;
countdiv.style = "background-color: orange; height: 30px; width: 90px; height:40px; width:89px; margin-left:300px; padding-left: 100px; margin-top:20px";
inpf.addEventListener("keypress",function(keyPressed){


    if (keyPressed.keyCode == "13"){
        count = count + 1;
        countdiv.innerHTML = "No. Of Task " + count;
        var stuff = document.getElementById("div_id").value;
let div = document.createElement("div");
div.style = "background-color: red; margin-left:500px; padding-left: 175px; margin-top: 20px";
let divv = document.createElement("div");
divv.style = "background-color: pink; margin-left:300px; padding-left: 100px; margin-top: 20px";

divv.style.height = "30px";
divv.style.width = "20px";
divv.innerHTML = "X";
div.style.width = "200px";
div.style.height = "40px";
div.innerHTML = stuff ;
inpf.value = "";

divv.addEventListener("click",function(){
div.innerHTML = "";
divv.style.display = "none";
div.style.display = "none";
count = count - 1;
countdiv.innerHTML = "No. of Tasks " + count;
})

//div.style = "margin-left: 10px";
document.body.appendChild(div); 
document.body.appendChild(divv);
document.body.appendChild(countdiv);
    }
})