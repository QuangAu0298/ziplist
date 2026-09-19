"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((result, l1entry, i) => {
        result.push(l1entry);
        result.push(list2[i]);
        return result;
    }, []);
}
const sampleList1 = ['a', 'b', 'c'];
const sampleList2 = [1, 2, 3];
console.log(zipList(sampleList1, sampleList2));
console.log(zipListTheFunctionalWay(sampleList1, sampleList2));
