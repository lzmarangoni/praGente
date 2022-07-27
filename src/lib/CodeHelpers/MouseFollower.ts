export const MouseFollower = (mouseFollower : HTMLDivElement) => {
    let mouseX : number, mouseY : number;

    let circle = {
        el: mouseFollower,
        x:window.innerWidth/2,
        y:window.innerHeight/2,
        w:40,
        h:40,
        update:function(){
            let l = this.x-this.w/2;
            let t = this.y-this.h/2;
            this.el.style.transform = 'translate3d('+l+'px,'+t+'px, 0)'
        }
    }

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    setInterval(() => {
        if (isNaN(circle.x)) { circle.x = 1 }
        if (isNaN(circle.y)) { circle.y = 1 }
        circle.x = lerp(circle.x, mouseX, 0.08);
        circle.y = lerp(circle.y, mouseY, 0.08);
        circle.update();
    }, 1000/60);

    function lerp (start : number, end : number, amt : number) {
        return (1-amt)*start+amt*end
    }
}
