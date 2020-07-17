import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
      <nav>
        <div className="nav-wrapper">
          <a className="nav-logo left" href="/">ConvoS</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/posts/user" className="nav-link">My Posts</a></li>
            <li><a href="/posts/add" className="nav-link">New Post</a></li>
            <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
            <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav>
        <div className="nav-wrapper">
          <a className="nav-logo left" href="/">Convos</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/login" className="nav-link">Log In</a></li>
            <li><a href="/signup" className="nav-link">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    </>

    return (
    <>
      {nav}
    </>
    )
}

export default NavBar;