import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import LongText from '../LongText';

class LongTextClass extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  longtextchange = (event) => this.setState({ value: event.target.value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <LongText value={value} onChange={this.longtextchange}></LongText>
      </div>
    );
  }
}

storiesOf('LongText', module).add('LongText', () => <LongTextClass />);
