//rest parameter and array function
let bubble_Sort = (...a) => {
    //block scope by using let
    let swapp;
    let n = a.length - 1
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                [x[i], x[i + 1]] = [x[i + 1], x[i]];
                swapp = true;
            }
            else{
                //do nothing
            }
        }
        n--;
    } while (swapp);
    return x;
}

//template literals
console.log(`Result : ${bubble_Sort(1,4,3,2,98,43,0)}`);