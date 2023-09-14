"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const regions = [region1, region2, region3, region4, region5];

let sum_quarter = (quarter) => { return region1[quarter] + region2[quarter] + region3[quarter] + region4[quarter] + region5[quarter]; };
let sum_region = (array) => { return array.reduce((accumulator, currentValue) => { return accumulator + currentValue; }, 0) };
let total_sales = () => { return sum_quarter(0) + sum_quarter(1) + sum_quarter(2) + sum_quarter(3); };

document.write("<h2> Sales by Quarter </h2>");
for (let i = 0; i < 4; i++) {
	document.write(`Q${i + 1}: $${sum_quarter(i)} <br>`);
}

document.write("<h2> Sales by Region </h2>");
for (let index in regions) {
	document.write(`Region ${parseInt(index) + 1}: $${sum_region(regions[index])} <br>`);
}

document.write("<h2> Total Sales </h2>");
document.write(`$${total_sales()}`);