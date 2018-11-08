import React, { Component } from 'react';

import Searchbox from "./Searchbox";
import Weather from "./Weather";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      cities: [
        { woeid: 2344116, name: 'Istanbul' },
        { woeid: 638242, name: 'Berlin' },
        { woeid: 44418, name: 'London' },
        { woeid: 565346, name: 'Helsinki' },
        { woeid: 560743, name: 'Dublin' },
        { woeid: 9807, name: 'Vancouver' }
      ]
    };
  }
  render() {
    return (
      <div class="page-container container mt-15">
        <div class="row">
          <div class="col-sm-12">
            <Searchbox keyword={this.state.keyword}/>
            <div class="row text-center">
            {this.state.cities.map((city, index) =>
              <Weather id={city.woeid} index="0"/>
            )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;