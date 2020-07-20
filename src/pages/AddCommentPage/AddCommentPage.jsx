import React, { Component } from 'react'

export default class AddCommentPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post.comments
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
                  <textarea 
                    name="comment"
                    type="text" 
                    className="materialize-textarea" 
                    onChange={this.handleChange}
                  />
                  <label htmlFor="comment">comment</label>
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