
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Login from '../src/Login';

export default {
  title: 'Login',
  component: Login,
};

export const Primary = () => <Login color="primary" />;
export const Secondary = () => <Login color="secondary" />;
export const Color = () => <Login color={color('color', '#00FF00')} />;
    