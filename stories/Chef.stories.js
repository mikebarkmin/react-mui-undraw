
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Chef from '../src/Chef';

export default {
  title: 'Chef',
  component: Chef,
};

export const Primary = () => <Chef color="primary" />;
export const Secondary = () => <Chef color="secondary" />;
export const Color = () => <Chef color={color('color', '#00FF00')} />;
    