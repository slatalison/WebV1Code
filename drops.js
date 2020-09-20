let dropSize = 20;
const attractionDistance = 2;
const attractionForce = 0.1;
const repulsionDistance = 1;
let repulsionForce = 0.5;

let friction = 0.9;

const maxVel = 5;
const maxForce = 1;

// Derived quantities
const attractd2 = Math.pow(dropSize * attractionDistance, 2);
const repulsed2 = Math.pow(dropSize * repulsionDistance, 2);
const vel2 = Math.pow(maxVel, 2);
const force2 = Math.pow(maxForce, 2);

class Drop {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.force = createVector(0, 0);

        this.col = random(100, 220);
    }

    show() {
        fill(180, 190, 255);
        ellipse(this.pos.x, this.pos.y, dropSize);
    }

    update() {
        if (this.force.magSq() >= force2) {
            this.force.setMag(maxForce);
        }

        this.vel.add(this.force);
        this.force = createVector(0, 0);

        if (this.vel.magSq() >= vel2) {
            this.vel.setMag(maxVel);
        }

        this.pos.add(this.vel);

        if (this.pos.x < 0 || this.pos.x > 90) {
            this.vel.x *= -1 * friction;
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1 * friction;
        }
        this.pos.x = constrain(this.pos.x, 0, 90);
        this.pos.y = constrain(this.pos.y, 0, height);

    }

    applyForce(f) {
        this.force.add(f);
    }

    interaction(drop) {
        let displacement = p5.Vector.sub(drop.pos, this.pos);
        const d2 = displacement.magSq();
        if (d2 === 0 || d2 >= attractd2) {
            return createVector(0, 0);
        }
        displacement.normalize();
        if (d2 >= repulsed2) {
            return p5.Vector.mult(displacement, attractionForce);
        }
        return p5.Vector.mult(displacement, -repulsionForce);
    }
}