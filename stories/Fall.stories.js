
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fall from '../src/Fall';

export default {
  title: 'Fall',
  component: Fall,
};

export const Primary = () => <Fall color="primary" />;
export const Secondary = () => <Fall color="secondary" />;
export const Color = () => <Fall color={color('color', '#00FF00')} />;
    