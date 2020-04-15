
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Development from '../src/Development';

export default {
  title: 'Development',
  component: Development,
};

export const Primary = () => <Development color="primary" />;
export const Secondary = () => <Development color="secondary" />;
export const Color = () => <Development color={color('color', '#00FF00')} />;
    