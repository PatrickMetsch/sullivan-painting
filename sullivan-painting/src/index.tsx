import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

const renderApp = (state:any) => {

  const updateGreetingText = (event:React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    const greetingText = target === '' ? initialState.greetingText : target;
    renderApp({
      ...state,
      greetingText
    });
  }

  const siteProps = {
    ...state,
    updateGreetingText
  }

  ReactDOM.render(
    <App {...siteProps} />,
    document.getElementById('root')
  );
}

const initialState = {
  greetingText: "Balls World!"
}

renderApp(initialState);