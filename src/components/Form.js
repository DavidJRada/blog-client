import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      author: '',
      likes: 0,
      id: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    if(this.props.post) {
      this.setState({
        title: this.props.post.title,
        content: this.props.post.content,
        author: this.props.post.user.name,
        likes: this.props.post.likes,
        id: this.props.post.id
      })
    }
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(
      event,
      {
        title: this.state.title,
        content: this.state.content,
        likes: this.state.likes,
        author: this.state.author,
        id: this.state.id,
      }
    )
    this.setState({
      title: "",
      content: "",
      author: '',
      likes: 0
    })
    if(this.props.post) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'title'}
          placeholder={'Title'}
          type={'text'}
          value={this.state.title}
          id={'title'}
        />
        <Input
          handleChange={this.handleChange}
          name={'content'}
          placeholder={'Post Content'}
          type={'text'}
          value={this.state.content}
          id={'content'}
        />
        <Input
          handleChange={this.handleChange}
          name={'likes'}
          placeholder={'Post likes'}
          type={'number'}
          value={this.state.likes}
          id={'likes'}
        />
        <Input
          handleChange={this.handleChange}
          name={'author'}
          placeholder={'Post Author'}
          type={'text'}
          value={this.state.author}
          id={'author'}
        />

        <input type='submit' value={this.props.post ? "update this notice" : "add this notice"} />
      </form>
    )
  }
}

export default Form
