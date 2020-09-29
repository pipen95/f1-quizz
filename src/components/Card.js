import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from './redux/actions/fetchDrivers';
import { Card, Badge } from 'react-bootstrap';

export class Cardz extends Component {
  componentDidMount() {
    this.props.fetchDrivers();
  }

  render() {
    const driversItems = this.props.drivers.drivers.map(driver => (
      <Card
        style={{
          width: '18rem',
          border: 'none',
          marginTop: '3rem'
        }}
        className="card my-3"
        key={driver.id}
      >
        <span className="span one"></span>
        <span className="span two"></span>
        <span className="span three"></span>
        <span className="span four"></span>
        <Card.Img variant="top" src={driver.img} />
        <Card.Body className="bg-secondary">
          <Card.Text className="text-white d-flex justify-content-between">
            {driver.name}
            <Badge pill variant="light" className="py-1 px-2 align-self-center">
              {driver.ratio}%
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
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

export default connect(mapStateToProps, { fetchDrivers })(Cardz);
