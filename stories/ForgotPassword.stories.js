
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ForgotPassword from '../src/ForgotPassword';

export default {
  title: 'ForgotPassword',
  component: ForgotPassword,
};

export const Primary = () => <ForgotPassword color="primary" />;
export const Secondary = () => <ForgotPassword color="secondary" />;
export const Color = () => <ForgotPassword color={color('color', '#00FF00')} />;
    