import React from 'react';
import logo from './logo.svg';
import './App.css';

type WithGreetingText = {greetingText: string};

export const App = (props:WithGreetingText) => {
  const { greetingText } = props;
  return <h1>{greetingText}</h1>
}
