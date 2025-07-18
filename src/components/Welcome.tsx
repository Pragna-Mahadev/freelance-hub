import React from 'react';
import { Link } from 'react-router-dom';

type WelcomeProps = {
  name: string;
};

function Welcome({ name }: WelcomeProps) {
  return (
    <div>
      <h2>Hello, {name}! 👋</h2>
    </div> 
  );
}

export default Welcome;


