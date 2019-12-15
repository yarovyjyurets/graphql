module.exports = {
  createUser,
}

function createUser({ userInput }, req) {
  console.log('userInput??')
  console.dir(userInput, { colors: true, depth: 10 });
  const testError = new Error('dummy error');
  // throw testError;
  return {
    name: 'NEW: My secret name!',
    age: 13,
    email: 'NEW: test@test.com',
  }
}