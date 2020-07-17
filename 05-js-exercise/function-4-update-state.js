let state = 0;

const sum = num => state += num;
const sub = num => state -= num;
const mul = num => state *= num;
const div = num => state /= num;
const clear = () => state = 0;

sum(2);
sum(10);
div(6);
