class SlingShot{ 
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10      
        }
        this.pointB = pointB
    }
}