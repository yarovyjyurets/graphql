// const { STATUS } = require('../constants');

module.exports = {
  getPost({ id }) {
    console.log('GET POST BY ID LOGIC');
    return {
      id,
      content: 'My secret content!',
      title: 'title!!',
    }
  },
  addPost({post}){
    console.log('NEW POST CREATION LOGIC');

    return {
      id: 'some new created ID',
      content: post.content,
      title: post.title,
    }
  },
  deletePost({id}){
    console.log('DELETE POST by id LOGIC');

    return {
      id: 'some deleted ID',
    }
  },
}
