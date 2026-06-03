function Event(name, seats) {
    this.name = name;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

let e1 = new Event("Music", 10);

console.log(Object.entries(e1));