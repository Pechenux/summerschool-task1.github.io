let header = document.querySelector('#intro');
let animation = [
    { text: "&nbsp;", delay: 200 }, 
    { text: "|", delay: 200 },
    { text: "&nbsp;", delay: 200 },
    { text: "|", delay: 200 },
    { text: "P|", delay: 50 },
    { text: "Pe|", delay: 50 },
    { text: "Pec|", delay: 50 },
    { text: "Pech|", delay: 50 },
    { text: "Peche|", delay: 50 },
    { text: "Pechen|", delay: 50 },
    { text: "Pechenu|", delay: 50 },
    { text: "Pechenux|", delay: 50 },
    { text: "Pechenux&nbsp;", delay: 200 },
    { text: "Pechenux|", delay: 200 },
    { text: "Pechenux&nbsp;", delay: 200 },
    { text: "Pechenux", delay: 200 },
]

let i = 0;
function updateIntro() {
    let step = animation[i];
    header.innerHTML = step.text;
    i++;

    if (i < animation.length) {
        setTimeout(updateIntro, step.delay);
    }
    else {
        header.classList.add('top')
    }
}

updateIntro();