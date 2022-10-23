function timer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timer, 1000);