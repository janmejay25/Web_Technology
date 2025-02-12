//change inner content by id
var text = document.getElementById("hello").innerHTML = "hello AI"

// assign value by exisiting tag
var text2 = document.getElementById("para").innerHTML;
document.getElementById("test").innerHTML = text2

//delete the value in tag
function removePara(){
     document.getElementById("para").innerHTML= " "
    };
document.getElementById("btn").onclick = removePara;

// add value in tage
document.getElementById("btnReset").onclick =  function(){
    document.getElementById("para").innerHTML = text2
}

// create html tag and add content
let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "added using JS";
document.getElementById("contain").appendChild(h1Tag);


