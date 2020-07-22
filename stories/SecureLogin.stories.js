
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SecureLogin from '../src/SecureLogin';

export default {
  title: 'SecureLogin',
  component: SecureLogin,
};

export const Primary = () => <SecureLogin color="primary" />;
export const Secondary = () => <SecureLogin color="secondary" />;
export const Color = () => <SecureLogin color={color('color', '#00FF00')} />;
    