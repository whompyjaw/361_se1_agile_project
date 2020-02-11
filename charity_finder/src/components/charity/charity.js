import React from 'react';
import './pages/Charity.css';
function charityProfile() {
    return(
        <React.Fragment>
            <h2>Charity Name</h2>
            <button type = "submit">Donate Now!</button>
            <h4>Welcome to XX charity, thank you for considering us with your gift.</h4>
            <p><strong>Our Mission Statement:</strong> <br/> Devoting our extra resources to those without...</p>

            <div className="charityTable">
                
            
                <fieldset>
                    <h3>Charity Details</h3>
                    <table>
                    <tr>
                        <td>Website</td>
                        <td><a href="https://www.youtube.com/watch?v=XyNlqQId-nk">www.catvideo.com</a></td>
                    </tr>
                    <tr>
                        <td>Pysical Address</td>
                        <td>1234 Main Street</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>Corvallis</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>Oregon</td>       
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <td>97331</td>
                    </tr>
                    <tr>
                        <td>Deductibility</td>
                        <td>Contributions are deductible</td>
                    </tr>
                    <tr>
                        <td>Foundation Status</td>
                        <td>Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)</td>
                    </tr>
                    <tr>
                        <td>NTEE Code</td>
                        <td>D20</td>
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
                            <td>84.2</td>
                            <td>3 of 4 stars</td>
                        </tr>
                        <tr>
                            <td>Accountability & Transparency</td>
                            <td>95.4</td>
                            <td>4 of 4 stars</td>
                        </tr>
                    </table>
                </fieldset>
              </div>
              <button type = "submit">Donate Now!</button>
        </React.Fragment>
    );}

export default charityProfile