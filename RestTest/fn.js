const fn = {
  add: (num1, num2) => num1 + num2,
  // makeUser: (name, age, gender) => ({ name, age, gender: undefined }),
  // // 예외 발생 시
  // throwErr: () => {
  //   throw new Error('XX');
  // },
  getName: (callback) => {
    const name = 'Mike';
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fn;
