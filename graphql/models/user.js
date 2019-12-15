const { STATUS } = require('../constants');

module.exports = {
  getUsers() {
    console.log('??USERS')
    return [
      {
        id: 1,
        name: 'My secret name!',
        email: 'test@test.com',
        status: STATUS.ACTIVE
      }
    ]
  },
  getUser({ id }) {
    console.log('??USER', id)
    return {
      id,
      name: 'My secret name!',
      email: 'test@test.com',
      status: STATUS.ACTIVE
    }
  },
}
