
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Charts from '../src/Charts';

export default {
  title: 'Charts',
  component: Charts,
};

export const Primary = () => <Charts color="primary" />;
export const Secondary = () => <Charts color="secondary" />;
export const Color = () => <Charts color={color('color', '#00FF00')} />;
    