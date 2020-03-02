function add(num1, num2 /*= 9*/) {
   
   
   
    //num2 = num2 || 5;


    /* if (num2 == undefined){
         num2 = 0.;
     } */

    return num1 + num2;
}
// const total = add(12); nan
const total = add(12, 15);
console.log(total);
