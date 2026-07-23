const clock = document.querySelector("#clock");
const dateElement = document.querySelector("#date");

setInterval(() => {

    const currentDate = new Date();

    clock.textContent = currentDate.toLocaleTimeString();

    dateElement.textContent = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}, 1000);