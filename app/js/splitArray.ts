/**
 * Breaks down the input into smaller arrays of specified size and an array of the remaining values.
 *
 * @param initialArray is the original array you want broken down
 * @param newArrayLength is the length you want the smaller arrays to be
 *
 * @returns A multi-dimensional array of the smaller arrays
 */
function splitArray(initialArray: Array<any>, newArrayLength: number) {
    const numOfNewArrays = Math.ceil(initialArray.length / newArrayLength);
    let newArray = [];
    if (initialArray.length >= 1 ) {
        for (let i = 0; i < numOfNewArrays; i++) {
            let smallArray = initialArray.slice((i * newArrayLength), ((i * newArrayLength) + newArrayLength));

            newArray.push(smallArray);
        }
    }

    return newArray;
}

export {
    splitArray
}