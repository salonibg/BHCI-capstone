import React, { Component } from 'react';
import '../../App.css';

class BasicSearch extends Component {

    render () {
        return (
            <div label="Basic Search" className="Basic_Search">
          <form>
              <fieldset>
              <div className="form_fields">
                  <label>
                    <h4>Condition or Disease</h4>
                    <input id="full" name="disease" />
                  </label>

                  <label>
                    <h4>Other terms</h4>
                    <input id="full" name="other terms" />
                  </label>

                  <label>
                    <h4>Location</h4>
                    <div className="four_row">
                      <input type="radio" name="location" /> Within
                      <input name="distance" defaultValue="50 miles"/>
                      <input name="address" defaultValue="Address"/>
                    </div>
                  </label>

                  <br></br>
                  <label>
                    <div className="three_row">
                      <input type="radio" name="location" /> In country, state, or city
                      <input name="location"/>
                    </div>
                  </label>

                  <label>
                    <h4>Location terms</h4>
                    <input id="full" name="location terms" />
                  </label>
                </div>
                
                <div className="buttons">
                  <button></button>
                  <button className="button_1" onClick={()=> this.showTable()}>Search</button>
                </div>
              </fieldset>
            </form>
        </div>
        )
    }
}

export default BasicSearch;