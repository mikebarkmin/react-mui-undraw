
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Navigation from '../src/Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Primary = () => <Navigation color="primary" />;
export const Secondary = () => <Navigation color="secondary" />;
export const Color = () => <Navigation color={color('color', '#00FF00')} />;
    