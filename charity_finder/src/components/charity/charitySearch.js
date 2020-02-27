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

    /* Used for actual rendering search results 
      
      handleOnInputChange = ( event ) => {
        const query = event.target.value;
        this.setState( {query: query, loading: true, message: ''}, () => {
        this.fetchSearchresults(query);
      } );
    }; */

    /* hard coded page return */
    handleOnInputChange = ( event ) => {
        window.location.href="/charityResultsSearch"
    }

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
                 {/*Search Input*/}
               <i className="fa fa-search search-icon" aria-hidden="true"/>
            </label>
            </div>
        )
    }
}

export default charitySearch;




    