class Calculator {
  #state = 0;

  sum(num) {
    this.#state += num;
  }

  state() {
    return this.#state;
  }
}

const calculator = new Calculator();
calculator.sum(2);
calculator.sum(5);
calculator.state(); // 7
