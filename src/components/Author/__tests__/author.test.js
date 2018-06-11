import React from 'react';
import ReactDOM from 'react-dom';
import Author from '../';

test('renders author name when passed to the content prop', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Author content={'DigiRiku'} />, container)
    expect(container.textContent).toMatch('by DigiRiku')
})

test('renders "[...]" when an empty string is passed to the content prop', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Author content={''} />, container)
    expect(container.textContent).toMatch('[...]')
})

test('renders "[...]" when no props are passed', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Author />, container)
    expect(container.textContent).toMatch('[...]')
})
