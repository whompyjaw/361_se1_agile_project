import React from 'react';
import './pages/Charity.css';
function charityResultsSearch() {
    return(
        <React.Fragment>
            <h2>Dogs</h2>
            We're close to reaching our goal!
            <div className="w3-light-grey">
                <div className="w3-container w3-red" id="dog-status-bar">88%</div>
            </div><br></br>
            <button type = "submit">Donate Now!</button>
            <h4>Welcome to Dogs charity, thank you for considering us with your gift.</h4>
            <p><strong>Our Mission Statement:</strong> <br/> Devoting our care to DOGS!</p>

            <div className="charityTable">
                
                <fieldset>
                    <h3>Charity Details</h3>
                    <table>
                    <tr>
                        <td>Website</td>
                        <td><a href="https://www.youtube.com/watch?v=XyNlqQId-nk">www.catvideo.com</a></td>
                    </tr>
                    <tr>
                        <td>Physical Address</td>
                        <td>567 Park Place</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>San Diego</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>California</td>       
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <td>98080</td>
                    </tr>
                    <tr>
                        <td>Deductibility</td>
                        <td>Contributions are deductible</td>
                    </tr>
                    <tr>
                        <td>Foundation Status</td>
                        <td>Organization which receives a substantial part of its from the general public   170(b)(1)(A)(vi)</td>
                    </tr>
                    <tr>
                        <td>NTEE Code</td>
                        <td>C33</td>
                    </tr>
                    <tr>
                        <td>NTEE Classification</td>
                        <td>Animal Protection and Welfare</td>
                    </tr>
                    <tr>
                        <td>NTEE Type</td>
                        <td>Animal-Related</td>
                    </tr>
                    <tr>
                        <td>Classification</td>
                        <td>Charitable Organization</td>
                    </tr>
                    <tr>
                        <td>Subsection</td>
                        <td>501(c)(3)</td>
                    </tr>
                    </table>
                </fieldset>
            </div>
            <div className="starRating">
                <fieldset>
                    <table>
                        <tr>
                            <th><strong>Overall Score & Rating</strong></th>
                            <th>Score (out of 100)</th>
                            <th>Rating</th>
                        </tr>
                        <tr>
                            <td><strong>Financial</strong></td>
                            <td>89.3</td>
                            <td>4 of 4 stars</td>
                        </tr>
                        <tr>
                            <td>Accountability & Transparency</td>
                            <td>92.9</td>
                            <td>3.5 of 4 stars</td>
                        </tr>
                    </table>
                </fieldset>
                </div>
                
              <button type = "submit">Donate Now!</button>
        </React.Fragment>
    );}

export default charityResultsSearch