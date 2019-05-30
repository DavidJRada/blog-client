import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
// import Users from './components/Users'
import Posts from './components/Posts'
import Aside from './components/Aside'
import 'materialize-css/dist/css/materialize.min.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      formIputs: {
        title: "",
        content: "",
        likes: 0,
        user_id: 0
      }
    }
    this.getPosts = this.getPosts.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.getPosts()
  }
  getPosts() {
    fetch('/posts').then(response => response.json()).then(json => this.setState({ posts: json }))
      .catch(error => console.error(error))

  }
  handleAdd(event, formInputs) {
    event.preventDefault()
    console.log(formInputs)
    fetch('/posts', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPost => {
        return createdPost.json()
      })
      .then(jsonnedPost => {
        this.setState({
          posts: [jsonnedPost, ...this.state.posts]
        })
      }).catch(error => console.error(error))
  }
  handleDelete(deletedNotice) {
    fetch(`/posts/${deletedNotice.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    })
      .then(json => {
        this.setState(state => {
          const posts = state.posts.filter(notice => {
            return notice.id !== deletedNotice.id
          })
          return { posts }
        })
      }).catch(error => console.log(error))
  }
  handleUpdate(event, formInputs) {
    event.preventDefault()
    fetch(`/posts/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    }).then(updatedPost => {
      this.getPosts()
    }).catch(error => console.error(error))
  }
  render() {
    return (
      <div className='container'>
        <Home />
        {/* <Users /> */}
        <Posts posts={this.state.posts} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
        <Aside handleSubmit={this.handleAdd}/>
      </div>
    )
  }
}


export default App;


// Attempted to use Router
//       <Router>
//         <div className='container'>
//           <nav>
//             <div className="nav-wrapper black text-darken-2">
//               <Link to="/">Home</Link>
//               <Link to="/users">Users</Link>
//               <Link to="/posts">Posts</Link>
//             </div>
//           </nav>

//           <Route path='/' exact component={Home} />
//           <Route path='/users' component={Users} />
//           <Route path='/posts' component={Posts} />
//         </div>
//       </Router >
//     );
//   }
// }


