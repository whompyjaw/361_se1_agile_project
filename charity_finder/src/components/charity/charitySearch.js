import React, { useCallback } from 'react';
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

        this.cancel = '';
    }

    fetchSearchresults = ( query ) => {

        /* API Token = 234f2d7a-2389-4ffd-9bfd-535a7fa11273 */
        const searchUrl = `https://api.globalgiving.org/api/public/services/search/projects?api_key=234f2d7a-2389-4ffd-9bfd-535a7fa11273&q=${query}`

        if ( this.cancel )  {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
			    cancelToken: this.cancel.token
        } )
          .then ( res => {
              console.warn(res);
            /*const resultsNotFound = !res.data.projects.project
              ? 'Nothing was found. Try a new search.'
              : '';*/
            this.setState({
              results: res.data.response.projects,
              //message: resultsNotFound,
              loading:false
            })
          })
          .catch( error => {
            if (axios.isCancel(error) || error){
              this.setState({
                loading:false,
                message: 'failed to fetch data.'
              })
            }
          })
      }; 

    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        this.setState( {query: query, loading: true, message: ''}, () => {
        this.fetchSearchresults(query);
      } );
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
               <i className="fa fa-search search-icon" aria-hidden="true"/>

               {/* render search results*/}
               { this.renderSearchResults }

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



    