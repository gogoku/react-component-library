import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../index';

storiesOf('Card', module).add('Card', () => (
  <Card title="Card title">
    <h2>Sample Card</h2>
  </Card>
));
