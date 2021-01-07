import React, { Component } from 'react'

export default class AddPost extends Component {
  state = {
    invalidForm: true,
      formData: {
        title: '',
        description: ''
      },
  }

  formRef = React.createRef();

  handleSubmit = e => {
      e.preventDefault();
      this.props.handleAddPost(this.state.formData);
    };

  handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
      });
  };

  render() {
    return (
      <>
        <div className="AddPost">
          <form className="col s12 center-align" ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <input 
                  name="title" 
                  id="post_title" 
                  type="text"
                  value={this.state.formData.title} 
                  onChange={this.handleChange} required 
                />
                <label htmlFor="post_title">Post Title</label>
              </div>
            </div>
              
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <textarea 
                  name="description" 
                  type="text" 
                  className="materialize-textarea" 
                  value={this.state.formData.description} 
                  onChange={this.handleChange} required
                />
                <label htmlFor="description">Description</label>
              </div>
            </div>
              
            <button type="submit" className="btn green" disabled={this.state.invalidForm}>
              <i className="material-icons left">add</i>
              Post
            </button>                           
          </form>
        </div>
      </>
    )
  }
}