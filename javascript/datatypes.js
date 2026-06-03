const eventName = "Music Night";
const eventDate = "2026-06-10";

let seats = 50;

console.log(`${eventName} on ${eventDate} with ${seats} seats available`);

function register() {
    if (seats > 0) {
        seats--;
        console.log("Registered successfully. Seats left: " + seats);
    } else {
        console.log("No seats available");
    }
}