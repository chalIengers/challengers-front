const fn = require('./fn');

// test('1은 1이야', () => {
//   expect(1).toBe(1);
// });

// // toBe(기본 값을 비교할 때 사용)
// test('2 더하기 3은5야', () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test('2 더하기 3은5가 아니야', () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test('2 더하기 3은5가 아니야', () => {
//   expect(fn.add(3, 3)).not.toEqual(5);
// });

// 재귀적으로 반환하기 때문에 Equal 사용
// test('이름과 나이를 입력한 다음 객체로 반환', () => {
//   expect(fn.makeUser('Mike', '30')).toBe({
//     name: 'Mike',
//     age: 30,
//   });
// });

// test('이름과 나이를 입력한 다음 객체로 반환', () => {
//   expect(fn.makeUser('Mike', 30)).toEqual({
//     name: 'Mike',
//     age: 30,
//   });
// });

// 깊은 비교 (undefind 식별 등등)
// test('이름과 나이를 입력한 다음 객체로 반환', () => {
//   expect(fn.makeUser('Mike', 30)).toStrictEqual({
//     name: 'Mike',
//     age: 30,
//   });
// });

// toBeNull - null 여부
// toBeUndefined - undefined 여부
// toBeDefined - defined 여부
// toBeTruthy - truth
// toBeFalsy - falsey

test('이름과 나이를 입력한 다음 객체로 반환', () => {
  expect(fn.add(1, -1)).toBeGreaterThanOrEqual(0);
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan
// toBeLessThanOrEqual 작거나 같다

// test('ID는10자 이하여야 합니다', () => {
//   const id = 'the_test_test';
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// 지바 스크립트는 소숫점 계산시 0000000이 계속 생김
// test('0.1 + 0.3 = ?', () => {
//   expect(fn.add(0.1, 0.3)).toBeCloseTo(0.4);
// });

// test('Hello world 에는 a 라는 글자가 있음?', () => {
//   expect('hello world').toMatch(/a/);
// });

// 대소문자 구분 없애려면 /i
// test('Hello world 에는 a 라는 글자가 있음?', () => {
//   expect('hello world').toMatch(/h/i);
// });

test('Hello world 에는 a 라는 글자가 있음?', () => {
  expect('hello world').toMatch(/h/i);
});

// toContain - 배열에서 해당하는 값이 존재하는지 찾음
// test('유저 중에 Mike 라는 사람 있나요?', () => {
//   const user = 'Mike';
//   const userList = ['Tom', 'Jane', 'Kai'];
//   expect(userList).toContain(user);
// });

// 예외 발생

// 예외 상황을 주고 thThrow 에 아무 값도 안 주면 모든 경우의 에러에서 테스트 통과
// // toThrow에 특정 에러 상황을 줬으면 그 상황이 아닌 경우 실패
// test('이거 에러 나나요?', () => {
//   expect(() => fn.throwErr()).toThrow('aa');
// });

// Jest의 경우 비동기와 다르게 함수를 바로 실행 시키고 끝나기 때문에 callback에서 설정한 3초를 기다리지 않는다
test('비동기 3초 후 이름 반환, ', () => {
  function callback(name) {
    expect(name).toBe('Mike');
  }
  fn.getName(callback);
});

// 반환값 done을 설정
// callback의 요구대로 3초 기다리고 실행
// test('비동기 3초 후 이름 반환, ', (done) => {
//   function callback(name) {
//     expect(name).toBe('Mike');
//     done();
//   }
//   fn.getName(callback);
// });

// 요구하는 쪽에서 Promise로 요구할 경우 done 필요없이 가디렸다 실행됌
// 이때 반드시 return이 있어야 한다
// test('비동기 3초 후 나이 반환, ', () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(31);
//   });
// });

// 위와 동일
// 이때 resolves는 fn.js에서 res
// test('비동기 3초 후 나이 반환, ', () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });

test('비동기 3초 후 나이 반환, ', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
