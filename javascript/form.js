document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = this.elements[0].value;

    if (name === "") {
        alert("Name required");
    } else {
        console.log("Submitted: " + name);
    }
});