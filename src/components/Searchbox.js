import React, { Component } from 'react';

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cities: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    alert('submitted: ' + this.state.text);
    event.preventDefault();
    // NEXT REDIRECT TO SEARCH
  }
  render() {
    return (
      <div class="row text-center mb-30 mt-30" onSubmit={this.handleSubmit}>
        <div class="col-sm-12">
          <form class="navbar-form" role="search">
            <div class="input-group add-on">
              <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" value={this.state.text} onChange={this.handleChange} />
              <div class="input-group-btn">
                <button type="submit" class="btn btn-default">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbox;
