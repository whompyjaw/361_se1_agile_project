import React from 'react'
import axios from 'axios';

class BeneficiarySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	const target = event.target
	const value = target.type === 'checkbox' ? target.checked : target.value

    const name = target.name;
    
    this.setState({[name]:value});
    //this.setState({value: event.target.value});
  }

// TO DO: Parse data from submit
// TO DO: Read about formik
//   class BeneficiaryFilter extends React.Component {
//       constructor(props) {
//           super(props);
//           this.state = {
//               singleParent: true,

//           }
//       }
//   }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input name="search" type="text" value={this.state.search} onChange={this.handleChange} />
        </label>
		<br />
		<label>
          Age:
          <input name="age" type="text" value={this.state.age} onChange={this.handleChange} />
        </label>
		<br />
		<label>
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
		<br /><br />
        <input type="submit" value="Find Services" />
      </form>
    );
  }
}
export default BeneficiarySearch;