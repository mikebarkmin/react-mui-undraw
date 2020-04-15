
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Choose from '../src/Choose';

export default {
  title: 'Choose',
  component: Choose,
};

export const Primary = () => <Choose color="primary" />;
export const Secondary = () => <Choose color="secondary" />;
export const Color = () => <Choose color={color('color', '#00FF00')} />;
    