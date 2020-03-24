function sym(...args) {
  const flatArgs = args.map(x => [...new Set(x)]).flatMap(x => x);
  const obj = {}
  flatArgs.forEach(val =>{
    if(obj[val]) {
      delete obj[val]
    } else {
      obj[val] = val;
    }
  })
  const result = Object.values(obj);
  return result;
}


sym([1, 2, 3, 3], [5, 2, 1, 4]);
