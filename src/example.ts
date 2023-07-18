import { Diagram, Box, Area, getArea } from "./drox.js";


const diagram = new Diagram(document.getElementById("diagram"));

const box = diagram.createBox(getArea(10, 90, 90, 10));

box.moveTo(getArea(20, 80, 80, 20)); //.in(1000);

//wait(1000);

//animate();