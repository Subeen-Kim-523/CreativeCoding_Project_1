class Ghost{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 0.5;
        this.exposure = 0;
        this.visible = true;
        this.timer = 0;
    }
    
    update(){
        let d = dist(mouseX, mouseY, this.x, this.y);
        
        // If touched by flashlight, increase exposure time
        if (d < 200) { // lightRadius = 200
            this.exposure++;
        } else {
            this.exposure = max(this.exposure - 1, 0);
        }  

        // Fade out when exposure exceeds threshold
        if (this.exposure > 60 && this.visible) {
            this.visible = false;
            this.timer = 0;
            this.exposure = 0;
        }
        // Reappear after 2 seconds (120 frames) with a larger size
        if (!this.visible) {
            this.timer++;
            if (this.timer > 120) {
                this.visible = true;
                this.size += 0.15;
                this.x = random(width * 0.3, width * 0.7);
                this.y = random(height * 0.3, height * 0.6);
            }
        }
        // Reset if the ghost becomes too large
        if (this.size > 2.5) {
            this.size = 0.5;
            this.y = 300;
        }
    }
    
    draw(pg){
        if (!this.visible) return;
        pg.push();
        pg.translate(this.x, this.y);
        pg.scale(this.size);
        
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);

        // Eyes
        pg.strokeWeight(2);
        pg.stroke(0);
        pg.noFill();
        pg.ellipse(-10, -10, 17, 17);
        pg.ellipse(10, -10, 17, 17);
        
        pg.noStroke();
        pg.fill(0);
        pg.ellipse(-10, -10, 5, 5);
        pg.ellipse(10, -10, 5, 5);
        
        // Mouth
        pg.strokeWeight(4);
        pg.stroke(255, 0, 0);
        pg.noFill();
        pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);

        // Body
        pg.noStroke();
        pg.fill(255);
        pg.rect(-15, 35, 30, 120);
        
        // Legs
        pg.rect(-10, 155, 5, 100);
        pg.rect(5, 155, 5, 100);

        //Arms
        pg.rect(-30, 45, 5, 100);
        pg.rect(25, 45, 5, 100);
        pg.rect(-30, 45, 20, 5);
        pg.rect(15, 45, 15, 5);

        pg.pop();
    }
}