function jump() {
    const character = document.querySelector("#character1");
    character.style.animation = "none"
    setTimeout(() => {
        character.style.animation = "jump 0.3s ease-in-out"
    }, 1000);
}
let left = 0;
function moveRight() {
    console.log({left})
    const character = document.querySelector("#character1");
    left+= 100;
    character.style.transition = 'left 1s linear'
    character.style.left =  `${left}px`
}
function moveLeft() {
    console.log({left})
    const character = document.querySelector("#character1");
    left-= 100;
    character.style.transition = 'left 1s linear';
    character.style.left =  `${left}px`
}