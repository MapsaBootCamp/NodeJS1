function triangle(h, q) {
    
    let triangleString = " ".repeat(q/2)+ "*" + "\n"
    for (let i = 1; i < h; i++) {
        triangleString += " ".repeat(q/2 - i) + "*" + " ".repeat(2*i) + "*" + "\n"
    }
    triangleString += "* ".repeat(q)
    return triangleString;
}

console.log(triangle(8, 4))