
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Portfolio from '../src/Portfolio';

export default {
  title: 'Portfolio',
  component: Portfolio,
};

export const Primary = () => <Portfolio color="primary" />;
export const Secondary = () => <Portfolio color="secondary" />;
export const Color = () => <Portfolio color={color('color', '#00FF00')} />;
    