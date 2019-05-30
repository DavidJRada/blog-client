import React from 'react'
import Form from './Form'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisible: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm() {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }
  render() {
    const { post, handleDelete, handleUpdate } = this.props
    return (
      <>
        {this.state.formVisible ? 
        <Form post={post} handleSubmit={handleUpdate} toggleForm={this.toggleForm}/> :
          <div className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
            <p>Author: {post.user.name}</p>
            <button onClick={() => handleDelete(post)}>X</button>
            <button onClick={this.toggleForm}>Edit This</button>
          </div>}
      </>
    )
  }
}

  export default Post
