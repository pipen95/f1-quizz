import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

import fetchQuotes from "../redux/actions/fetchQuotes";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.handleClik = this.handleClik.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  handleClik(e) {
    this.props.fetchQuotes();
  }

  render() {
    const BASE_URL = "https://twitter.com/intent/tweet?text=";
    const button = (
      <div>
        <hr />
        <a href="#" className="btn btn-dark" onClick={this.handleClik}>
          New Quote
        </a>
        <a
          href={BASE_URL + this.props.quote.quote + this.props.quote.author}
          target="blanck"
          id="tweet-quote"
        >
          <i className="fab fa-twitter twitter-icon" />
        </a>
      </div>
    );
    const author = (
      <span id="author">
        Author->>>
        {this.props.quote.author}
      </span>
    );
    return (
      <div className="quote-box" id="quote-box">
        <div className="card" id="text">
          <div className="card-body">
            {this.props.quote.quote && (
              <h2 className="card-header">Powerful Quote</h2>
            )}
            <p id="quote-text">
              <i className="fas fa-quote-left" />
              {this.props.quote.quote}
              <i className="fas fa-quote-right" />
            </p>
          </div>
        </div>
        <div>
          {this.props.quote.quote ? author : ""}
          <br />
          {this.props.quote.quote ? button : ""}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  quote: state.quote.quote
});

Quotes.proptypes = {
  fetchQuotes: Proptypes.func.isRequired,
  quote: Proptypes.Object
};

export default connect(mapStateToProps, { fetchQuotes })(Quotes);
