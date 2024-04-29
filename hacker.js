document.querySelector("h1").onmouseover = e => {
    let interval = null;
    let iteration = 0; // amount times it randomises the letter

    // cancels a timed, repeating action which
    // was prev. established by a call to setInterval()
    clearInterval(interval); 

    interval = setInterval(() => {
        const target = e.target;
        const value = target.dataset.value;
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // array of letters

        target.innerText = value
        .split("")
        .map((letter, index) => {
            if (index < iteration) return value[index];
            else if (letter === " ") return " ";
            return alphabet[Math.floor(Math.random() * 26)]; // get rand letter
        })
        .join("");

        if(iteration >= value.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
}