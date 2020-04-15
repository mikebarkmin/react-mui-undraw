
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Alert from '../src/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const Primary = () => <Alert color="primary" />;
export const Secondary = () => <Alert color="secondary" />;
export const Color = () => <Alert color={color('color', '#00FF00')} />;
    