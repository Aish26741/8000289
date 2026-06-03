function addEvent(name) {
    console.log("Event added: " + name);
}

function registerUser() {
    console.log("User registered");
}

function categoryCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let musicCount = categoryCounter();
console.log(musicCount());
console.log(musicCount());