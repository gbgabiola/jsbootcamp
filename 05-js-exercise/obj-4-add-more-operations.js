class Calculator {
  #state = 0;

  sum(num) {
    return this.#state += num;
  }

  sub(num) {
    return this.#state -= num;
  }

  mul(num) {
    return this.#state *= num;
  }

  div(num) {
    return this.#state /= num;
  }

  state() {
    return this.#state;
  }

  clear() {
    this.#state = 0;
  }
}

const calculator = new Calculator();
calculator.sum(2);
calculator.sum(5);
calculator.sub(1);
calculator.div(2);
calculator.state(); // 3

// calculator.clear(); // 0
