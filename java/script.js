let btn = document.querySelector('[data-weight]');
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;

btn.addEventListener('click',function(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

     BMI(weight,height);
    
})


function BMI(w,h){
let sum = w/(h*h);
document.getElementById('BMI').value = sum.toFixed(2)
}