export const isSubArray = (arr1 = [], arr2 = []) => {
  let arrMajor = arr1,
    arrMinor = arr2;
  if (arr1.length < arr2.length) {
    arrMajor = arr2;
    arrMinor = arr1;
  }

  let count = 0;
  for (let i = 0; i < arrMajor.length; i++) {
    for (let j = 0; j < arrMinor.length; j++) {
      if (arrMajor[i] === arrMinor[j]) {
        count++;
        break;
      }
    }
  }
  return count === arrMinor.length ? true : false;
};
