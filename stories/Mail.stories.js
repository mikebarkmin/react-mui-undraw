
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mail from '../src/Mail';

export default {
  title: 'Mail',
  component: Mail,
};

export const Primary = () => <Mail color="primary" />;
export const Secondary = () => <Mail color="secondary" />;
export const Color = () => <Mail color={color('color', '#00FF00')} />;
    