const obj = {
    value: 10,
    add(a, b, c) {
      return this.value + a + b + c;
    }
  };
  
  const curriedAdd = curry(obj.add.bind(null));  // Passing `null` instead of `obj`
  
  console.log(curriedAdd(1)(2)(3));  // NaN

  const obj1 = {
    value: 10,
    add(a, b, c) {
      return this.value + a + b + c;
    }
  };
  
  const curriedAdd1 = curry(obj.add.bind(obj));  
  
  console.log(curriedAdd1(1)(2)(3));  // 16

  
  
  