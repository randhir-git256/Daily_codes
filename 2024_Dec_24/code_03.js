// Multiplication of the two matarix 

const multiplyMatrices = (matrixA, matrixB) => {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
};

// Example matrices
const matrixA = [
    [6, 2],
    [3, 4]
];
const matrixB = [
    [2, 5],
    [1, 2]
];

console.log("Matrix Multiplication:", multiplyMatrices(matrixA, matrixB));
