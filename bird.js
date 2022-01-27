export class Bird {
    constructor() {
        this.img = document.getElementById('bird');
        this.img.style.display = "block";
        this.animate();
    }

    animate() {
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            this.img.style.left = mouseX + 'px';
            this.img.style.top = mouseY + 'px';    
        });
    }

}