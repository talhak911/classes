async function Check() {
    let randomNum = Math.random();
    console.log(randomNum);
    let result = new Promise((resolve, reject) => {
        if (randomNum > 0.5) {
            resolve('greater than 0.5');
        }
        else {
            reject('less than 0.5');
        }
    });
    result.then((resolve) => { console.log("Number is ", resolve); })
        .catch((rej) => {
        console.log("Number is ", rej);
    });
    let Result = await result;
    console.log(Result);
}
setTimeout(Check, 5000);
export {};
