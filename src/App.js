import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardz from './components/Card';
import { Provider } from 'react-redux';
import store from './components/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Container className="p-3">
        <Jumbotron className="shadow">
          <Jumbotron className="bg-dark">
            <h1 className="header text-center color-white text-white mb-3">
              Who is your favorite F1&nbsp;driver?
            </h1>
            <Cardz />
          </Jumbotron>
        </Jumbotron>
      </Container>
    </Provider>
  );
}
