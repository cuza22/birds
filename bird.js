export class Bird {
    constructor() {
        this.bird = document.getElementById('bird');
    }

    draw(ctx, t, dots) {
        this.animate(ctx, dots);
    }

    animate(ctx, dots) {
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            this.bird.style.left = mouseX + 'px';
            this.bird.style.top = mouseY + 'px';    
        });
    }

}