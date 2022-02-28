const scene = document.querySelector(".scene");
const ball = document.querySelector(".ball");
const sceneRect = scene.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

function onMove(e){
    if (!ballActive) return;

	const { clientX, clientY } = e;
	const left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2;
	const top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2;
    const right = scene.offsetWidth - scene.offsetTop - ballRect.width;
    const bottom = scene.offsetHeight - scene.offsetTop - ballRect.width;

    if(left < 0 || left > right || top < 0 || top > bottom){
        document.removeEventListener('mousemove', onMove);
        return;
    }

	ball.style.transform = `translate(${left}px, ${top}px)`;
}

scene.addEventListener("mousemove", onMove);

ball.addEventListener("click", () => {
	ballActive = !ballActive;
});