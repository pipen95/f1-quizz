import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import { Provider } from 'react-redux';
import store from './components/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Jumbotron className="shadow">
          <Jumbotron className="bg-dark">
            <h1 className="header text-center color-white text-white mb-0">
              Vote for your favorite F1&nbsp;driver!
            </h1>
            <CardList />
          </Jumbotron>
        </Jumbotron>
      </Container>
    </Provider>
  );
}
