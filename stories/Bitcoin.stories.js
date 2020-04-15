
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Bitcoin from '../src/Bitcoin';

export default {
  title: 'Bitcoin',
  component: Bitcoin,
};

export const Primary = () => <Bitcoin color="primary" />;
export const Secondary = () => <Bitcoin color="secondary" />;
export const Color = () => <Bitcoin color={color('color', '#00FF00')} />;
    