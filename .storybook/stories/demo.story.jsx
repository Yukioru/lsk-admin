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


storiesOf('Demo scss', module)
  .add('default', () => <Styles><button>Click me</button></Styles>)
  .add('red', () => <Styles><button className="red">Click me</button></Styles>);

storiesOf('dot.filter.example', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('dot.filter.other', module)
  .add('with text', () => (
    <a onClick={action('clicked')}>Hello Button</a>
  ))
  .add('with some emoji', () => (
    <a onClick={action('clicked')}>😀 😎 👍 💯</a>
  ));

storiesOf('addWithInfo', module)
  .addWithInfo('with text', () => (
    <a onClick={action('clicked')}>Hello Button</a>
  ))
  .addWithInfo('with some emoji', () => (
    <a onClick={action('clicked')}>😀 😎 👍 💯</a>
  ));


storiesOf('Knobs', module)
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
