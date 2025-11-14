let maxversion = 7; // Total number of ghost versions

class Ghost{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 0.5;
        this.exposure = 0;
        this.visible = true;
        this.timer = 0;
        this.version = 0;
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
                this.size = random(0.15, 2.5);
                this.x = random(width * 0.3, width * 0.7);
                this.y = random(height * 0.3, height * 0.6);
                this.version = ((this.version + 1) % maxversion);
            }
        }
        // // Reset if the ghost becomes too large
        // if (this.size > 2.5) {
        //     this.size = 0.5;
        //     this.y = 300;
        // }
    }
    
    ghostdraw(pg){
        if (!this.visible) return;
        pg.push();
        pg.translate(this.x, this.y);
        pg.scale(this.size);
        
        switch(this.version +1){
            case 1:
                this.drawVersion1(pg);
                break;
            case 2:
                this.drawVersion2(pg);
                break;
            case 3:
                this.drawVersion3(pg);
                break;
            case 4:
                this.drawVersion4(pg);
                break;
            case 5:
                this.drawVersion5(pg);
                break;
            case 6:
                this.drawVersion6(pg);
                break;
            case 7:
                this.drawVersion7(pg);
                break;
        }
        pg.pop();
    }

    drawVersion1(pg){
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
    }

    drawVersion2(pg){
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
        pg.bezier(-20, 20, -10, 0, 10, 0, 20, 20);
 
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
    }

    drawVersion3(pg){
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);
 
        // Eyes
        pg.strokeWeight(2);
        pg.stroke(0);
        pg.fill(255, 0, 0);
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
        pg.bezier(-20, 20, -10, 0, 10, 0, 20, 20);
 
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
    }
    
    drawVersion4(pg){
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);
        
        //Eyebrow
        pg.stroke(0);
        pg.strokeWeight(1);
        pg.bezier(-18, -20, -14, -21, -10, -21, -6, -20);
        pg.bezier(18, -20, 14, -21, 10, -21, 6, -20);

        // Eyes
        pg.strokeWeight(1);
        pg.fill(255, 0, 0);
        pg.stroke(255, 0, 0);
        pg.bezier(-18, -10, -14, -17, -10, -17, -6, -10);
        pg.bezier(-18, -10, -14, -3, -10, -3, -6, -10);
        
        pg.bezier(18, -10, 14, -17, 10, -17, 6, -10);
        pg.bezier(18, -10, 14, -3, 10, -3, 6, -10);
        
        
        // Nose
        pg.noStroke();
        pg.ellipse(0, 3, 12, 12);
        
        // Mouth
        pg.stroke(255, 0, 0);
        pg.strokeWeight(4);
        pg.fill(255);
        pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);
        
        //Balloon
        pg.fill(255, 0, 0);
        pg.strokeWeight(1);
        pg.stroke(255);
        pg.rect(-55, -30, 1, 150);
        
        pg.noStroke();
        pg.ellipse(-55, -60, 50, 60);
        
        //Arms
        pg.noStroke();
        pg.fill(255);
        pg.quad(-15, 40, -40, 120, -50, 115, -25, 40);
        pg.ellipse(-50, 120, 20, 20);
        pg.quad(15, 40, 40, 120, 50, 115, 25, 40);
        pg.ellipse(50, 120, 20, 20);

        // Body + Clothes
        pg.noStroke();
        pg.fill("#7A0000");
        pg.quad(-15, 35, -40, 155, 40, 155, 15, 35);
        pg.fill("#E60026");
        pg.ellipse(-15, 40, 20, 20);
        pg.ellipse(0, 40, 20, 20);
        pg.ellipse(15, 40, 20, 20);
        
        pg.ellipse(-40, 155, 30, 30);
        pg.ellipse(-20, 155, 30, 30);
        pg.ellipse(0, 155, 30, 30);
        pg.ellipse(20, 155, 30, 30);
        pg.ellipse(40, 155, 30, 30);
        
        // Legs
        pg.ellipse(-15, 205, 30, 100);
        pg.ellipse(15, 205, 30, 100);
        pg.ellipse(-30, 250, 40, 20);
        pg.ellipse(30, 250, 40, 20);
    }

    drawVersion5(pg){
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);
        
        //Eyebrow
        pg.stroke(0);
        pg.strokeWeight(1);
        pg.bezier(-18, -20, -14, -21, -10, -21, -6, -20);
        pg.bezier(18, -20, 14, -21, 10, -21, 6, -20);

        // Eyes
        pg.strokeWeight(1);
        pg.fill(255, 0, 0);
        pg.stroke(255, 0, 0);
        pg.bezier(-18, -10, -14, -17, -10, -17, -6, -10);
        pg.bezier(-18, -10, -14, -3, -10, -3, -6, -10);
        
        pg.bezier(18, -10, 14, -17, 10, -17, 6, -10);
        pg.bezier(18, -10, 14, -3, 10, -3, 6, -10);
        
        // Nose
        pg.noStroke();
        pg.ellipse(0, 3, 12, 12);
        
        // Mouth
        pg.stroke(255, 0, 0);
        pg.strokeWeight(4);
        pg.fill(255);
        pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);
        
        //Tear
        pg.fill("#880808");
        pg.rect(-14, -3, 1, 1);
        pg.rect(13, -3, 1, 1);
        
        //Balloon
        pg.fill(255, 0, 0);
        pg.strokeWeight(1);
        pg.stroke(255);
        pg.rect(-55, -30, 1, 150);
        
        pg.noStroke();
        pg.ellipse(-55, -60, 50, 60);
        
        //Arms
        pg.noStroke();
        pg.fill(255);
        pg.quad(-15, 40, -40, 120, -50, 115, -25, 40);
        pg.ellipse(-50, 120, 20, 20);
        pg.quad(15, 40, 40, 120, 50, 115, 25, 40);
        pg.ellipse(50, 120, 20, 20);

        // Body + Clothes
        pg.noStroke();
        pg.fill("#7A0000");
        pg.quad(-15, 35, -40, 155, 40, 155, 15, 35);
        pg.fill("#E60026");
        pg.ellipse(-15, 40, 20, 20);
        pg.ellipse(0, 40, 20, 20);
        pg.ellipse(15, 40, 20, 20);
        
        pg.ellipse(-40, 155, 30, 30);
        pg.ellipse(-20, 155, 30, 30);
        pg.ellipse(0, 155, 30, 30);
        pg.ellipse(20, 155, 30, 30);
        pg.ellipse(40, 155, 30, 30);
        
        // Legs
        pg.ellipse(-15, 205, 30, 100);
        pg.ellipse(15, 205, 30, 100);
        pg.ellipse(-30, 250, 40, 20);
        pg.ellipse(30, 250, 40, 20);
    }

    drawVersion6(pg){
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);
        
        //Eyebrow
        pg.stroke(0);
        pg.strokeWeight(1);
        pg.bezier(-18, -20, -14, -21, -10, -21, -6, -20);
        pg.bezier(18, -20, 14, -21, 10, -21, 6, -20);

        // Eyes
        pg.strokeWeight(1);
        pg.fill(255, 0, 0);
        pg.stroke(255, 0, 0);
        pg.bezier(-18, -10, -14, -17, -10, -17, -6, -10);
        pg.bezier(-18, -10, -14, -3, -10, -3, -6, -10);
        
        pg.bezier(18, -10, 14, -17, 10, -17, 6, -10);
        pg.bezier(18, -10, 14, -3, 10, -3, 6, -10);
        
        // Nose
        pg.noStroke();
        pg.ellipse(0, 3, 12, 12);
        
        // Mouth
        pg.stroke(255, 0, 0);
        pg.strokeWeight(4);
        pg.fill(255);
        pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);
        
        //Tear
        pg.fill("#880808");
        pg.rect(-14, -3, 1, 10);
        pg.rect(13, -3, 1, 10);
        
        //Balloon
        pg.fill(255, 0, 0);
        pg.strokeWeight(1);
        pg.stroke(255);
        pg.rect(-55, -30, 1, 150);
        
        pg.noStroke();
        pg.ellipse(-55, -60, 50, 60);
        
        //Arms
        pg.noStroke();
        pg.fill(255);
        pg.quad(-15, 40, -40, 120, -50, 115, -25, 40);
        pg.ellipse(-50, 120, 20, 20);
        pg.quad(15, 40, 40, 120, 50, 115, 25, 40);
        pg.ellipse(50, 120, 20, 20);

        // Body + Clothes
        pg.noStroke();
        pg.fill("#7A0000");
        pg.quad(-15, 35, -40, 155, 40, 155, 15, 35);
        pg.fill("#E60026");
        pg.ellipse(-15, 40, 20, 20);
        pg.ellipse(0, 40, 20, 20);
        pg.ellipse(15, 40, 20, 20);
        
        pg.ellipse(-40, 155, 30, 30);
        pg.ellipse(-20, 155, 30, 30);
        pg.ellipse(0, 155, 30, 30);
        pg.ellipse(20, 155, 30, 30);
        pg.ellipse(40, 155, 30, 30);
        
        // Legs
        pg.ellipse(-15, 205, 30, 100);
        pg.ellipse(15, 205, 30, 100);
        pg.ellipse(-30, 250, 40, 20);
        pg.ellipse(30, 250, 40, 20);
    }

    drawVersion7(pg){
        // Head
        pg.noStroke();
        pg.fill(255);
        pg.ellipse(0, 0, 50, 70);
        
        //Eyebrow
        pg.stroke(0);
        pg.strokeWeight(1);
        pg.bezier(-18, -20, -14, -21, -10, -21, -6, -20);
        pg.bezier(18, -20, 14, -21, 10, -21, 6, -20);

        // Eyes
        pg.strokeWeight(1);
        pg.fill(255, 0, 0);
        pg.stroke(255, 0, 0);
        pg.bezier(-18, -10, -14, -17, -10, -17, -6, -10);
        pg.bezier(-18, -10, -14, -3, -10, -3, -6, -10);
        
        pg.bezier(18, -10, 14, -17, 10, -17, 6, -10);
        pg.bezier(18, -10, 14, -3, 10, -3, 6, -10);
        
        // Nose
        pg.noStroke();
        pg.ellipse(0, 3, 12, 12);
        
        // Mouth
        pg.stroke(255, 0, 0);
        pg.strokeWeight(4);
        pg.fill(255);
        pg.bezier(-20, 10, -10, 30, 10, 30, 20, 10);
        
        //Tear
        pg.fill("#880808");
        pg.rect(-14, -3, 1, 15);
        pg.rect(13, -3, 1, 15);
        
        //Balloon
        pg.fill(255, 0, 0);
        pg.strokeWeight(1);
        pg.stroke(255);
        pg.rect(-55, -30, 1, 150);
        
        pg.noStroke();
        pg.ellipse(-55, -60, 50, 60);
        
        //Arms
        pg.noStroke();
        pg.fill(255);
        pg.quad(-15, 40, -40, 120, -50, 115, -25, 40);
        pg.ellipse(-50, 120, 20, 20);
        pg.quad(15, 40, 40, 120, 50, 115, 25, 40);
        pg.ellipse(50, 120, 20, 20);

        // Body + Clothes
        pg.noStroke();
        pg.fill("#7A0000");
        pg.quad(-15, 35, -40, 155, 40, 155, 15, 35);
        pg.fill("#E60026");
        pg.ellipse(-15, 40, 20, 20);
        pg.ellipse(0, 40, 20, 20);
        pg.ellipse(15, 40, 20, 20);
        
        pg.ellipse(-40, 155, 30, 30);
        pg.ellipse(-20, 155, 30, 30);
        pg.ellipse(0, 155, 30, 30);
        pg.ellipse(20, 155, 30, 30);
        pg.ellipse(40, 155, 30, 30);
        
        // Legs
        pg.ellipse(-15, 205, 30, 100);
        pg.ellipse(15, 205, 30, 100);
        pg.ellipse(-30, 250, 40, 20);
        pg.ellipse(30, 250, 40, 20);
    }
}