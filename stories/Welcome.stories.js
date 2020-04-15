
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Welcome from '../src/Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const Primary = () => <Welcome color="primary" />;
export const Secondary = () => <Welcome color="secondary" />;
export const Color = () => <Welcome color={color('color', '#00FF00')} />;
    