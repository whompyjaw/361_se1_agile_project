import React, { Fragment } from 'react'
import axios from 'axios';

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      age: '',
      sex: '',
      resultAge: ''
    };

    //this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  } 

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  } 

  handleSubmit = event => {
    // alert(`${this.state.age} ${this.state.search}`);
    // this.setState({
    //   resultAge: this.state.age,
    //   resultSearch: this.state.search
    // })
    DisplayData.display(event);
    event.preventDefault();
  }
  render() {
    const { search, age, sex } = this.state
    return (
    <div> 
     {/*
     Results:
      {this.state.resultSearch}
      {this.state.resultAge}<br /> -->
    
     */}  
      
      
      
      
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input name="search" type="text" value={search} onChange={this.handleSearchChange} />
        </label>
		<br />
      <label>


      </label>
		<label>
          Age:
          <input name="age" type="text" value={age} onChange={this.handleAgeChange} />
        </label>
		<br />
		{/* <label>
          Sex:
          <input type="text" value={this.state.sex} onChange={this.handleChange} />
        </label>
		<br />
		<label>
          Zip Code:
          <input type="text" value={this.state.zip} onChange={this.handleChange} />
        </label>
		<br />
		<label>
          City:
          <input type="text" value={this.state.city} onChange={this.handleChange} />
        </label>
		<br />

<p> Services:</p>
		<label>
        Food 
          <input type="checkbox" value={this.state.food} onChange={this.handleChange} />
        </label>

		<label>
          Domestic Violence
          <input type="checkbox" value={this.state.domesticViolence} onChange={this.handleChange} />
        </label>
		
		<label>
          Parental
          <input type="checkbox" value={this.state.singleParent} onChange={this.handleChange} />
        </label>

		<label>
          Financial
          <input type="checkbox" value={this.state.financial} onChange={this.handleChange} />
        </label>

		<label>
          Addiction
          <input type="checkbox" value={this.state.addiction} onChange={this.handleChange} />
        </label>

		<label>
          Vocational
          <input type="checkbox" value={this.state.vocational} onChange={this.handleChange} />
        </label>

		<label>
          Mental Health
          <input type="checkbox" value={this.state.mentalHealth} onChange={this.handleChange} />
        </label>
		<br /><br /> */}
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export class DisplayData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      search: ''  
    };
}

  display(event) {
    this.setState = {
     age: this.state.age,
     search: this.state.search 
    };
  }

  render() {
    return(
      <div>
      {this.state.age}
      </div>


    );
  }  
}

export default FormData;