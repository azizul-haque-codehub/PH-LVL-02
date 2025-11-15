function random(indx: number): number | string | boolean {
  const arr: any = [10, "azizul", true];
  return arr[indx];
}

// const res1 = random(1) // could be number | string | boolean
// console.log(res1.toString); // unexpected props

const res1 = random(1) as string // type assertion
console.log(res1.charAt(2)); // expected props

const res2 = random(2) as boolean
console.log(res2.valueOf());
const res3 = random(0) as number
console.log(res3.toFixed(3));

// const div:object = document.querySelector("div")
// console.log(div);
const div = document.querySelector("div") as HTMLElement // type assertion
console.log(div);