import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import * as postAPI from '../../services/posts-api';
import AddPost from '../AddPost/AddPost'
import PostList from '../PostList/PostList'

class App extends Component {
  state = {
    posts: [],
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const posts = await postAPI.getAll();
    console.log(posts)
    this.setState({ posts })
  }

  render () {
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>

        <Route exact path='/posts/add' render={() => 
          userService.getUser() ? <AddPost handleAddPost = {this.handleAddPost} user={this.state.user}/> : <Redirect to='/login' />
        }/>

        <Route exact path='/' render={() => 
          <PostList 
            posts={this.state.posts} 
            user={this.state.user} 
          />
        }/>

        <Route exact path='/signup' render={({ history }) => 
          <SignupPage 
            history={history} 
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        
        <Route exact path='/login' render={({ history }) => 
          <LoginPage 
            history={history} 
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
      </>
    );
  }
}

export default App;
