export const shuffleArray = (array: any[]) => {
  [...array].sort(() => Math.random() - 0.5);
  // -0.5 ~ 0.5 가 random하게 return 되므로 배열이 무작위로 섞인다.
  // (양수가 return되면 b가 a보다 앞으로 온다)
  // (음수가 return되면 a가 b보다 앞으로 온다)
};
