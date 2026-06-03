const showEvent = (name = "Unknown") => console.log(name);

let obj = { name: "Music", seats: 10 };
let { name, seats } = obj;

let newList = [...eventList];