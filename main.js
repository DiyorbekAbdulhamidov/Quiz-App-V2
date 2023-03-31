function sum() {
    let numm = 0;
    let nums = [1, 2, 3, 4, 5, "h"];
  
    nums.forEach(function(num) {
      if (typeof num !== "number") {
        throw new Error("ENVOLID TOKEN");
      } else {
        numm += num;
      }
    });
  }
  
  sum();
  // 
  // 