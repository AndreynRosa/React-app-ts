import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import createSagaMiddleware from 'redux-saga';
import App from '../App';
import RepositoryList from '../component/RepositoryList';
import {
  repositoriesLoadRequest,
  repositoriesLoadSuccess,
} from '../store/ducks/repositories/actions';
import GetRepositoriesMock from './mock/GetRepositoriesMock';

const initialState = {
  repositories: {
    data: [
      { name: 'Android-Java-Native-Exemple', id: 205602287 },
      { name: 'cultural-android-app', id: 216683402 },
      { name: 'Gerador-de-conteudos', id: 262713486 },
      { name: 'Java-Spring-and-React-', id: 245491399 },
      { name: 'Java-with-Junit-exemple', id: 237565428 },
    ],
    error: false,
    loading: false,
  },
};

// Configure store and pass sagamiddleware
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore(initialState);

// Component Test.
describe(' Testing App Component', () => {
  it('render correctly', () => {
    const warppert = shallow(<App />, { context: { store } });
    expect(warppert).toMatchSnapshot();
  });
});

describe(' Testing RepositoryList Component', () => {
  it('render correctly', () => {
    const warppert = shallow(
      <Provider store={store}>
        <RepositoryList />
      </Provider>,
    ).dive();
    expect(warppert).toMatchSnapshot();
  });
});

// Actions Test

describe('ACTIONS FROM REPOSITORIES - TEST - GetRepositories ', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it(' LOAD_REQUEST, LOAD_SUCCCES ', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetRepositoriesMock },
      });
    });

    const expectedActions = [repositoriesLoadRequest('AndreynRosa')];
    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch(repositoriesLoadRequest('AndreynRosa'));
  });
});
