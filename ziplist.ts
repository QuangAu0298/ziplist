function zipList(list1: Array<number | string>, list2: Array<number | string>): Array<number | string> {
  const result: Array<number | string> = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list1: Array<number | string>, list2: Array<number | string>): Array<number | string> {
  return list1.reduce((result: Array<number | string>, l1entry, i) => {
    result.push(l1entry);
    result.push(list2[i]);
    return result;
  }, []);
}

const sampleList1: string[] = ['a', 'b', 'c'];
const sampleList2: number[] = [1, 2, 3];

console.log(zipList(sampleList1, sampleList2));
console.log(zipListTheFunctionalWay(sampleList1, sampleList2));
