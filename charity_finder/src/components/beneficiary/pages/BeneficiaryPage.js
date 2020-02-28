import React, { Fragment } from 'react'
import axios from 'axios';

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      age: '',
      sex: '',
      resultAge: '',
      zip: '',
      city: '',
      food: '',
      addiction: '',
    };

     this.handleInputChange = this.handleInputChange.bind(this);
  }


handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  
  this.setState({
    [name]: value
  });
}

  handleSubmit = event => {
    alert(`Age: ${this.state.age}
Search: ${this.state.search}
Sex: ${this.state.sex}
Zip: ${this.state.zip}
City: ${this.state.city}
Food Assistance: ${this.state.food}
Addiction: ${this.state.addiction} 
`); 
    //event.preventDefault();
  }
  render() {
    const { search, age, sex } = this.state
    return (
    <div> 
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input name="search" type="text" value={search} onChange={this.handleInputChange} />
        </label>
		<br />
      <label>


      </label>
		<label>
          Age:
          <input name="age" type="text" value={age} onChange={this.handleInputChange} />
        </label>
		<br />
		 <label>
          Sex:
          <input name='sex' type="text" value={sex} onChange={this.handleInputChange} />
        </label>
		<br />
		<label>
          Zip Code:
          <input name='zip' type="text" value={this.state.zip} onChange={this.handleInputChange} />
        </label>
		<br />
		<label>
          City:
          <input name='city' type="text" value={this.state.city} onChange={this.handleInputChange} />
        </label>
		<br />

<p> Services:</p>
		<label>
        Food 
          <input name='food' type="checkbox" checked={this.state.food} onChange={this.handleInputChange} />
        </label>

		<label>
          Addiction
          <input name='addiction' type="checkbox" checked={this.state.addiction} onChange={this.handleInputChange} />
        </label>

		<br /><br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default FormData;