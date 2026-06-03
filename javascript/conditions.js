let events = [
    { name: "Music", seats: 10, status: "upcoming" },
    { name: "Dance", seats: 0, status: "upcoming" },
    { name: "Tech Talk", seats: 5, status: "past" }
];

events.forEach(event => {
    if (event.status === "upcoming" && event.seats > 0) {
        console.log(event.name + " is available");
    }
});

try {
    let x = undefinedVariable;
} catch (error) {
    console.log("Error handled: " + error.message);
}