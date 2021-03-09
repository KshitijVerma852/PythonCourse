// function a() {
//     let grandpa = "grandpa";
//     return function () {
//         let father = "father";
//         return function () {
//             let son = "son";
//             return `${grandpa} -> ${father} -> ${son}`;
//         };
//     };
// }

const a = () => {
    let grandpa = "grandpa";
    return () => {
        let father = "father";
        return () => {
            let son = "son";
            return `${grandpa} -> ${father} -> ${son}`;
        };
    };
};

console.log(a()()());
