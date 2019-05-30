// import React, { Component } from 'react';
// import Form from './Form'

// class UserPosts extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             posts: [],
//             formInputs: {
//                 title: "",
//                 content: "",
//                 likes: 0,
//                 author: ""
//             }
//         }
//         this.getPosts = this.getPosts.bind(this)
//         this.handleAdd = this.handleAdd.bind(this)
//         this.handleDelete = this.handleDelete.bind(this)
//         this.handleUpdate = this.handleUpdate.bind(this)
//     }
//     componentDidMount() {
//         this.getPosts()
//     }
//     getPosts() {
//         console.log(this.props.id)
//         fetch(`/users/${this.props.id}/posts`)
//             .then(response => response.json())
//             .then(jsonedPosts => this.setState({ posts: jsonedPosts }))
//             .catch(err => console.error(err))

//     }

//     handleAdd(event, formInputs) {
//         event.preventDefault()
//         fetch(`/posts`, {
//           body: JSON.stringify(formInputs),
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//           }
//         })
//           .then(createdPost => {
//             return createdPost.json()
//           })
//           .then(jsonedPost => {
//             this.setState({
//               posts: [jsonedPost, ...this.state.posts]
//             })
//           }).catch(error => console.error(error))
//       }
//       handleDelete(deletedPost) {
//         fetch(`/notices/${deletedPost.id}`, {
//           method: 'DELETE',
//           headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//           }
//         })
//           .then(json => {
//             this.setState(state => {
//               const posts = state.posts.filter(post => {
//                 return post.id !== deletedPost.id
//               })
//               return { posts }
//             })
//           }).catch(error => console.log(error))
//       }
//       handleUpdate(event, formInputs) {
//         event.preventDefault()
//         fetch(`/notices/${formInputs.id}`, {
//           body: JSON.stringify(formInputs),
//           method: 'PUT',
//           headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//           }
//         }).then(updatedPost => {
//           this.getPosts()
//         }).catch(error => console.error(error))
//       }
//     render() {
//         console.log(this.props)
//         return (
//             <div className='container'>
//                 {this.state.posts.map(post => {
//                     return (
//                         <div key={post.id} className='card'>
//                             <h4>Title: {post.title}</h4>
//                             <h5>Content: {post.content}</h5>
//                             <Form handleSubmit={this.handleAdd}/>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default UserPosts