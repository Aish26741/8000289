fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name: "User", event: "Music" }),
    headers: {
        "Content-type": "application/json"
    }
})
.then(res => res.json())
.then(data => console.log("Success", data));