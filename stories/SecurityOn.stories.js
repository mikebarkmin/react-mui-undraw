
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SecurityOn from '../src/SecurityOn';

export default {
  title: 'SecurityOn',
  component: SecurityOn,
};

export const Primary = () => <SecurityOn color="primary" />;
export const Secondary = () => <SecurityOn color="secondary" />;
export const Color = () => <SecurityOn color={color('color', '#00FF00')} />;
    