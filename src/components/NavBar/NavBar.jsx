import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
      <nav>
        <div className="nav-wrapper">
          <a className="nav-logo left" href="/">ConvoS</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/" className="nav-link">All Posts</a></li>
            <li><a href="/posts/user" className="nav-link">My Posts</a></li>
            <li><a href="/posts/add" className="nav-link">New Post</a></li>
            <li><a class="btn btn-info" href="https://www.dropbox.com/s/7jee1tesiwc9ggr/Matthew%20Moquin%20Resume.pdf?dl=0" download="resume.pdf">My Resume</a></li>
            {/* <li><Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} /></li> */}
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