let state = 0

const sum = num => {
  return state + num;
};

const sub = num => {
  return state - num;
};

const mul = num => {
  return state * num;
};

const div = num => {
  return state / num;
};

state = sum(2);
state = sum(10);
state = div(6);

const clear = () => {
  state = 0;
};
