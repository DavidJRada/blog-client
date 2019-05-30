// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import UserPosts from './UserPosts'
// import 'materialize-css/dist/css/materialize.min.css';



// class Users extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             users: [],
//             redirect: false,
//             user: {}
//         }
//         this.getUsers = this.getUsers.bind(this)
//         this.getUser = this.getUser.bind(this)
//     }
//     componentDidMount() {
//         this.getUsers()
//     }
//     getUsers() {
//         fetch('/users')
//             .then(response => response.json())
//             .then(jsonedUsers => this.setState({ users: jsonedUsers }))
//             .catch(err => console.error(err))
//     }
//     getUser(id) {
//         this.setState({
//             user: this.state.users[id],
//             redirect: !this.state.redirect
//         })
//         if (this.state.redirect) {
//             return <Redirect path={`/user/${id}/posts`} />
//         }
//     }
//     // renderRedirect() {
//     //     this.router.push('/posts')
//     // }

//     render() {

//         console.log(this.props)
//         return (
//             <div className='container'>

//                 {this.state.users.map(user => {
//                     return (
//                         <div key={user.id}
//                             className='card'>
//                             <h4>Name: {user.name}</h4>
//                             <h5>Password: {user.password}</h5>


//                             <Router>
//                                 <Link to={`/user/${user.id}/posts`} onClick={() => { this.getUser(user.id) }}>See More</Link>

//                                 {this.state.redirect ? <UserPosts id={user.id} /> : null}


//                             </Router>

//                         </div>
//                     )
//                 })}

//             </div>
//         )
//     }
// }

// export default Users