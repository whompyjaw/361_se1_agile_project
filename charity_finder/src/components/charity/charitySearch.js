import React from 'react';
import './pages/chairtySearch.css';
import axios from 'axios';

class charitySearch extends React.Component {

    constructor (props) {
        super ( props );

        this.state = {
            query: '',
            results: {},
            loading: false, 
            message: '',
        };

        this.canel = '';
    }

    fetchSearchresults = (themeId, query) => {
        const searchUrl = "https://api.globalgiving.org/api/public/projectservice/themes/edu/projects?api_key=234f2d7a-2389-4ffd-9bfd-535a7fa11273"

        if ( this.cancel )  {
            this.cancel.cancel()
        }

        this.cancel = axios.CancelToken.source()

        axios.get( searchUrl, {
			    cancelToken: this.cancel.token
        } )
        //     .then( res => {
        //       //const resultNotFoundMsg
        //       console.warn( res );
        //     }
    };

    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        console.warn ( query );
        this.setState( {query: query, loading: true, message: ''} )
    };

    render() {

        const { query } = this.state;
    

        return (
            <div className = "container">
            {/*Heading*/}
            <h2 className="heading">Charity Search</h2>

            {/*Search Input*/}
            <label className = "search-label" htmlFor="search-input">
                <input
                    type="text"
                    name = "query"
                    value={ query }
                    id="search-input"
                    placeholder="Search for Charity"
                    onChange = {this.handleOnInputChange}
                
                />
                 {/*Search Input
                 This should be in the search field, but I don't know why it isn't*/}
               <i className="fas fa-search search-icon"></i>

            </label>
            </div>
        )
    }
}

export default charitySearch;

/*function charitySearch() {


     class charityForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A theme was submitted: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Theme:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
    }

    ReactDOM.render (<charityForm />, document.getElementById('root')); 
    
}*/



    