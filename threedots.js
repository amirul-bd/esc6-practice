// three ...
const age = [11, 14, 16, 13, 18];
const age2 = [15, 21, 22, 25, 26];
const age3 = [35, 37, 40, 55, 65]

const allAges = age.concat(age2).concat([5]).concat(age3);
// This output
// [
//     11, 14, 16, 13, 18, 15,
//     21, 22, 25, 26,  5, 35,
//     37, 40, 55, 65
//   ]

const allAges2 = [age, age2, 5, age3]
// output
// [
//     [ 11, 14, 16, 13, 18 ],
//     [ 15, 21, 22, 25, 26 ],
//     5,
//     [ 35, 37, 40, 55, 65 ]
//   ]


const allAges3 = [...age, ...age2, 5, ...age3]
// This output
// [
//     11, 14, 16, 13, 18, 15,
//     21, 22, 25, 26,  5, 35,
//     37, 40, 55, 65
//   ]


const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
//const maximum = Math.max(business, minister, sochib);


const maximum = Math.max(takaPoisa)
// output nan
const maxim = Math.max(...takaPoisa)
// output maximum

console.log(maxim);









