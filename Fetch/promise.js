const sum = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 1) reject("Number is less than 1");

        let s = 0;
        for (let i = 0; i <= num; i++) {
            s += i;
        }
        console.log("Star delay: ");
        return resolve(delay(s));
    });
};
const delay = (summary) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(summary);
        }, 3000);
    });
};
sum(3)
    .then((result) => {
        console.log(`Result is ${result}`);
        return result;
    })
    .then((data) => {
        console.log(`final: ${data}`);
    })
    .catch((err) => {
        console.log(err);
    });