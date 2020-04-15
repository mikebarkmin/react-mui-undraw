
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Building from '../src/Building';

export default {
  title: 'Building',
  component: Building,
};

export const Primary = () => <Building color="primary" />;
export const Secondary = () => <Building color="secondary" />;
export const Color = () => <Building color={color('color', '#00FF00')} />;
    