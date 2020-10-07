import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from './redux/actions/fetchDrivers';
import { addVote } from './redux/actions/fetchDrivers';
import { Card, Badge } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

export class Cardz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  componentDidMount() {
    this.props.fetchDrivers();
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const driversItems = this.props.drivers.drivers.map((driver, idx) => (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        key={driver.id.toString()}
      >
        <Card
          style={{
            width: '18rem',
            border: 'none',
            marginTop: '3rem',
            minHeight: '14rem'
          }}
          className="bg-secondary"
        >
          <span className="span one"></span>
          <span className="span two"></span>
          <span className="span three"></span>
          <span className="span four"></span>
          <Card.Img variant="top" src={driver.img} />
          <Card.Body>
            <Card.Text className="text-white d-flex justify-content-between">
              {driver.name}
              <Badge
                pill
                variant="light"
                className="py-1 px-2 align-self-center"
                onClick={this.handleClick}
              >
                Stats
              </Badge>
              <Badge
                pill
                variant="light"
                className="py-1 px-2 align-self-center"
                onClick={this.props.addVote.bind(null, idx)}
              >
                Votes: {driver.ratio}
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          key={driver.id.toString()}
          style={{
            width: '18rem',
            border: 'none',
            marginTop: '3rem',
            minHeight: '14rem'
          }}
          className="bg-light"
        >
          <Card.Body>
            <Card.Text className="d-flex justify-content-between">
              {driver.stats}
            </Card.Text>
            <Badge
              pill
              variant="light"
              className="py-1 px-2 align-self-center"
              onClick={this.handleClick}
              key={driver.id.toString()}
            >
              Go Back
            </Badge>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    ));

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {driversItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drivers: state.drivers
});

export default connect(mapStateToProps, { fetchDrivers, addVote })(Cardz);
