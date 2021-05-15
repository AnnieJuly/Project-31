class Plinko {
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
       for(var j = 40; j <=width; j=j+50)
       {
           plinkos.push(new Plinko(j,75));
       }
       for(var j = 15; j <=width-10; j=j+50) 
       {
           plinkos.push(new Plinko(j,175));
       }
    }
}