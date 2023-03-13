"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q : 37
function make_shirt(size = "large", message = " I love TypeScript.") {
    console.log(` ${size} ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "again i love typescript");
