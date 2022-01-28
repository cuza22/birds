export class Bird {
    constructor(x, y) {
        this.bird = this.create();
        this.x = x;
        this.y = y;
        this.follow();
    }

    create() {
        let img = document.createElement('img');
        img.src = ('bird_2.png');
        img.style.position = 'absolute';
        img.style.zIndex = 999;
        document.body.appendChild(img);

        return img;
    }

    follow() {
        this.turn();

        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            this.jump_to(mouseX, mouseY);
        })
    }

    jump_to(mouseX, mouseY) {
        const step_length = 5;

        // movement
        if (Math.abs(mouseX - this.x) > 5 && Math.abs(mouseY - this.y) > 5) {
            if (mouseX < this.x && mouseY < this.y) {
                this.x += step_length;
                this.y += step_length;
            } else if (mouseX < this.x && mouseY > this.y) {
                this.x += step_length;
                this.y -= step_length;
            } else if (mouseX > this.x && mouseY < this.y) {
                this.x -= step_length;
                this.y += step_length;
            } else {
                this.x -= step_length;
                this.y -= step_length;
            }
            console.log(this.x, this.y);
            setTimeout(() => {}, 100);
        }
        // jumping

    }

    arc(ctx) {
        
    }

    turn() {
        let oldX = 0;
        const bird_width = this.bird.width;

        document.addEventListener("mousemove", (e) => {
            if (e.clientX > oldX) {
                this.bird.style.transform = 'scaleX(1)';
                // this.x -= bird_width;
            } else if (e.clientX < oldX) {
                this.bird.style.transform = 'scaleX(-1)'; 
            }

            oldX = e.clientX;
        })
    }

}