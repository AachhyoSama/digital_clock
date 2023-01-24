function changeDateAndTime() {
    const date = new Date();

    const day = date.toLocaleString("en-us", { weekday: "long" });
    const month = date.toLocaleString("default", { month: "long" });

    document.getElementById("current-date").innerHTML =
        day + " | " + month + " " + date.getDate() + ", " + date.getFullYear();

    document.getElementById("current-time").innerHTML =
        date.toLocaleTimeString();
}

setInterval(changeDateAndTime, 1000);
