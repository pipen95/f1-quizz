import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVote } from './redux/actions/fetchDrivers';
import { Card, Badge } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import data from '../data/data.json'

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  imagePicker = id => {
    const img = data.filter(el => el.id === id)
    return img[0].img;
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
      >
        <Card
          style={{
            border: 'none'
          }}
          className="bg-secondary card-front"

        >
          <span className="span one"></span>
          <span className="span two"></span>
          <span className="span three"></span>
          <span className="span four"></span>
          <Card.Img variant="top" src={`${this.imagePicker(this.props.driver.driverId)}`} />
          <Card.Body>
            <Card.Text className="text-white d-flex justify-content-between">
              {this.props.driver.GivenName} {this.props.driver.FamilyName}
              <Badge
                pill
                variant="light"
                className="py-1 px-2 align-self-center btn"
                onClick={this.handleClick}
              >
                Stats
              </Badge>
              <Badge
                pill
                variant="light"
                className="py-1 px-2 align-self-center btn"
                onClick={this.props.addVote.bind(null, this.props.idx)}
              >
                Votes: {this.props.stats.wins}
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            border: 'none',
          }}
          className="bg-secondary"
        >
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Text className="text-white">
              Season: {new Date().getFullYear()}
            </Card.Text>
            <Card.Text className="text-white">
              Team: {this.props.constructor.Name}
            </Card.Text>
            <Card.Text className="text-white">
              Ranking: {this.props.stats.position}
            </Card.Text>
            {/* <Card.Text className="text-white">
              Wins: {this.props.stats.wins}
            </Card.Text> */}
            <Card.Text className="text-white">
              Points: {this.props.stats.points}
            </Card.Text>
            <Badge
              pill
              variant="light"
              className="py-1 px-2 align-self-center btn"
              onClick={this.handleClick}
            >
              Go Back
            </Badge>
          </Card.Body>
        </Card>
      </ReactCardFlip >
    );
  }
}

export default connect(null, { addVote })(CardItem);

