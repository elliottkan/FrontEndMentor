//Function to add Input into UL
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputText = document.createTextNode(inputValue);
    li.appendChild(inputText);
    inputValue === "" ? alert("You must write something!") : document.getElementById("myUL").append(li);
    document.getElementById("myInput").value = "";

    // var button = document.createElement("BTN");
    // var txt = document.createTextNode("X")
    }
 