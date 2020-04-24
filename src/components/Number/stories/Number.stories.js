import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Number from '../Number';

const options = [
  { value: 105, label: 'Service guide' },
  { value: 101, label: 'Fleet Monitor' },
];

class NumberClass extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  dropdownchange = (selectedOption) => this.setState({ selectedOption });

  render() {
    return (
      <div>
        <Number
          value={this.state.selectedOption}
          options={options}
          onChange={this.dropdownchange}
        ></Number>
      </div>
    );
  }
}

storiesOf('Number', module).add('Number', () => <NumberClass />);
