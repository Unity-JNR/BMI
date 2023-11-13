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
document.getElementById('BMI').value = sum.toFixed(2);
let range = document.querySelector('[data-range]');
if(sum <18.5 ){
    
    range.innerText = "underweight"
} else if (sum >=18.5 && sum <= 24.9){
    range.innerText ="perfectly healthy"
} else if(sum >25 && sum <=29.9){
    range.innerText =" overweight"

} else if(sum >= 30 && sum<39.9){
    range.innerText ="obese"
    
 } else if(sum>40){
    range.innerText ="severe obese"
    
 }


}