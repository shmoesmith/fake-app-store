import React from 'react';
import { connect } from 'react-redux';
import { addApp } from '../actions/apps';

class Form extends React.Component {
  state = { name: '', description: '', category: '', price: '', version: '', author: '', logo: '', featured: false  }

  onSubmit = (e) => {
    e.preventDefault();
    const app = this.state;
    this.props.dispatch(addApp(app));
  }

    handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
          [name]: value
      });
    }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input 
          name = "name"
          placeholder="name"
          value = {this.state.name}
          onChange ={this.handleInputChange}
          />
        <input
          name = "description"
          placeholder = "description"
          value = {this.state.value}
          onChange ={this.handleInputChange}
          />
        <input
          name = "category"
          placeholder = "category"
          value = {this.state.category}
          onChange ={this.handleInputChange}
          />
        <input 
          name = "price"
          placeholder = "price"
          value = {this.state.price}
          onChange ={this.handleInputChange}
          />
        <input 
          name = "version"
          placeholder = "version"
          value = {this.state.version}
          onChange ={this.handleInputChange}
          />
        <input 
          name = "author"
          placeholder = "author"
          value = {this.state.author}
          onChange ={this.handleInputChange}
          />
        <input
          name = "logo"
          placeholder = "url of logo"
          value = {this.state.logo}
          onChange ={this.handleInputChange}
          />
        <input
          name = "featured"
          placeholder = "true/false"
          value = {this.state.featured}
          onChange ={this.handleInputChange}
          />
      </form>
    );
  }
}

export default connect()(Form);