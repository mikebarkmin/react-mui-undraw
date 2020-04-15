
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SignIn from '../src/SignIn';

export default {
  title: 'SignIn',
  component: SignIn,
};

export const Primary = () => <SignIn color="primary" />;
export const Secondary = () => <SignIn color="secondary" />;
export const Color = () => <SignIn color={color('color', '#00FF00')} />;
    