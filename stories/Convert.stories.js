
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Convert from '../src/Convert';

export default {
  title: 'Convert',
  component: Convert,
};

export const Primary = () => <Convert color="primary" />;
export const Secondary = () => <Convert color="secondary" />;
export const Color = () => <Convert color={color('color', '#00FF00')} />;
    