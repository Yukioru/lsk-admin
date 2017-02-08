import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import importcss from 'importcss';

@importcss(require('./demo.igscss'))
class Styles extends Component {
  render() {
    return this.props.children;
  }
}


storiesOf('Button', module)
  .add('with text', () => <Styles><button>Click me</button></Styles>)
  .add('red text', () => <Styles><button className="red">Click me</button></Styles>);

storiesOf('demo.button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('other.a', module)
  .add('with text', () => (
    <a onClick={action('clicked')}>Hello Button</a>
  ))
  .add('with some emoji', () => (
    <a onClick={action('clicked')}>😀 😎 👍 💯</a>
  ));


storiesOf('Storybook Knobs', module)
  .add('with a button', () => (
    <button
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'Hello Button')}
    </button>
  ))
  .add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  });
