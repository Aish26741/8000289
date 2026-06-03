document.querySelector("#registerBtn").onclick = function () {
    alert("Registered!");
};

document.querySelector("#category").onchange = function () {
    console.log(this.value);
};

document.addEventListener("keydown", function (e) {
    console.log(e.key);
});