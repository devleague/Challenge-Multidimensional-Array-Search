function locate(array, target) {
  let found = false;

  if (array.length < 2 && array[0] === target) {
    return true;
  } else if (array.length < 2 && array[0] !== target) {
    return false;
  }

  if (array.some(element => element === target)) {
    return true;
  }
  array.forEach(element => {
    if (locate(element, target)) {
      found = true;
    }
  });

  if (found) {
    return true;
  } else {
    return false;
  }
}

module.exports = locate;
