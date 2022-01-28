import {
    Bird
} from './bird.js';

const MAX_BIRDS = 20;

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        let birds = [];
        document.addEventListener("click", (e) => {
            if (birds.length > MAX_BIRDS) { return; }
            const bird = new Bird(e.clientX, e.clientY);
            birds.push(bird);
        })
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }
}

window.onload = () => {
    new App();
};