import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducers from '../../reducers';
import Subscribe from './Subscribe';

describe('Subscribe', () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(reducers)}>
        <Subscribe />
      </Provider>
    );
  });

  it('should render input field', () => {
    expect(screen.getByPlaceholderText('Enter ISIN')).toBeInTheDocument();
  });

  it('should render input field', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
