import React, { Component } from 'react'

export default class EditPost extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post
  }

  formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdatePost(this.state.formData);
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
          <div className="EditPost">
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
                    id="description" 
                    type="text" 
                    className="materialize-textarea" 
                    value={this.state.formData.description} 
                    onChange={this.handleChange}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
                
              <button type="submit" className="btn green" disabled={this.state.invalidForm}>
                Save
              </button>                           
            </form>
          </div>
        </>
      )
  }
}