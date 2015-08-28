function deepEqual(x, y) {
  if (isObject(x) && isObject(y)) {
    var propsInX = 0, propsInY = 0;
    for (var prop in x) {
      propsInX += 1;
    }

    for (var prop in y) {
      propsInY += 1;
      if (!(prop in y) || !deepEqual(x[prop], y[prop]))
        return false;
    }
    return propsInX === propsInY;
  }
  else {
    return x === y;
  }

}

function isObject(candidate) {
  if (typeof(candidate) === 'object' && candidate != null)
    return true;
  else
    return false;
}
