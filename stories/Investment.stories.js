
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Investment from '../src/Investment';

export default {
  title: 'Investment',
  component: Investment,
};

export const Primary = () => <Investment color="primary" />;
export const Secondary = () => <Investment color="secondary" />;
export const Color = () => <Investment color={color('color', '#00FF00')} />;
    