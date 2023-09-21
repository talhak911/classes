import data from "./data.json" assert { type: "json" };
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log("Name is ", element.name);
    console.log("ID is ", element.id);
}
class point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function maxima(n, P) {
    const result = [];
    for (let i = 0; i < n; i++) {
        let maximal = true;
        for (let j = 0; j < n; j++) {
            if (i !== j && P[i].x <= P[j].x && P[i].y <= P[j].y) {
                maximal = false;
                break;
            }
        }
        if (maximal === true) {
            result.push(P[i]);
        }
    }
    return result;
}
const points = [
    new point(200, 300),
    new point(100, 500),
    new point(150, 400),
    new point(300, 200),
    new point(250, 350)
];
const result = maxima(points.length, points);
console.log(result);
