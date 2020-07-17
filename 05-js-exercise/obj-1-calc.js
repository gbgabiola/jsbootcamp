const calculator = {
  state: 0,

  sum(num) {
    return this.state += num;
  }
};

calculator.sum(2);
calculator.sum(4);
