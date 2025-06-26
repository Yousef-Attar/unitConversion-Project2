/*
1 meter = 3.281 feet 1feet=0.304
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn=document.getElementById("convert-btn")
const inputNumber=document.getElementById("input")
const lengthEl = document.getElementById("length")
const volumeEl= document.getElementById("volume")
const massEl= document.getElementById("mass")



convertBtn.addEventListener("click",function(){
    let toConvert=inputNumber.value
    if(toConvert>0){
    Length(toConvert)
    Volume(toConvert)
    Mass(toConvert)
}}
)

function Length(num){
let toFeet=(3.281*num).toFixed(3)
let toMeter=(num*(1/3.281)).toFixed(3)
return lengthEl.textContent =`${num} meters = ${toFeet} feet
 |  ${num} feet = ${toMeter} meters` 
}
function Volume(num){
    let toGallon=(0.264*num).toFixed(3)
    let toLitter=(num*(1/0.264)).toFixed(2)
    return volumeEl.textContent =`${num} Litters = ${toGallon} Gallons
     |  ${num} Gallons = ${toLitter} Litters` 
}
function Mass(num){
    let toPound=(2.204*num).toFixed(3)
    let toKilo=(num*(1/2.204)).toFixed(2)
    return massEl.textContent =`${num} Kilo = ${toPound} Pound
     |  ${num} Pound = ${toKilo} Kilo`
}
