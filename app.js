let inputvlaue = document.querySelector("#inputvalues")
let listcontainer = document.querySelector("#list-container")
let button = document.querySelector("button")

button.addEventListener("click", () => {
    if (inputvlaue.value === '') {
        alert("you must enter something")

    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputvlaue.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // span.addEventListener("click", () => {
        //     console.log("span clicked")
        //     listcontainer.removeChild(li);

        // })


    }
    inputvlaue.value = "";
    saveData();


})
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// here we will see how to stro in the or save data in the chrome
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showTask();