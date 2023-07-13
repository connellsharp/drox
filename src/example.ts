interface Area {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

function getArea(...values: number[]): Area {
    const [top, right, bottom, left] = values;
    return { top, right, bottom, left };
}

interface Movement {
    start: Area;
    end: Area;
    time: number;
}

class Diagram {
    readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;

        this.element.style.position = "relative";
        this.element.className = "diagram";
    }

    createBox(area: Area) {
        var box = new Box();
        this.element.appendChild(box.element);
    

        return box;
    }
}

class Box {
    readonly element: HTMLElement;

    constructor() {
        this.element = document.createElement("div");

        this.element.style.position = "absolute";
        this.element.className = "box red rounded rectangle";
    }

    moveTo(area: Area) {
        this.element.style.left = area.left + "%";
        this.element.style.top = area.top + "%";
        this.element.style.width = (area.right - area.left) + "%";
        this.element.style.height = (area.bottom - area.top) + "%";
    }
}


const diagram = new Diagram(document.getElementById("diagram"));

const box = diagram.createBox(getArea(10, 90, 90, 10));

box.moveTo(getArea(20, 80, 80, 20)); //.in(1000);

//wait(1000);

//animate();