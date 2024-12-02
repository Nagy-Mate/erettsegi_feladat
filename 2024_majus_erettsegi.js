import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import input from "../input.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath =  path.join(__dirname, 'dobasok.txt')

function FileRead(filePath){
    let content = ''
    try {
        content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (error) {
        console.log(error);
    }
}
function FileWrite(filePath, data){
    try {
        fs.writeFileSync(filePath, data);
    } catch(err){
        console.log(err);
    }
}
//1.
let data = FileRead(filePath);
let dataArr = data.split(', ');
let numbers = [];
dataArr.forEach(e => {
    numbers.push(parseInt(e));
});
//2.
let mezo = 0;
let visszalep = 0;
let lepesek = "";
numbers.forEach(i => {
    mezo += i;
    if(mezo % 10 == 0){
        mezo -= 3;
        visszalep++;
    }
    lepesek += mezo + " " ;
});
console.log("2. Feladat:\n",lepesek)
console.log("3. Feladat:\nA játék során "+visszalep+" alkalommal lépett létrára.")
if(mezo >= 45){
    console.log("4. Feladat:\nA játékot befejezte.");
}
else{
    console.log("4. Feladat:\nA játékot abbahagyta..");
}
FileWrite(filePath, data)