
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Children from '../src/Children';

export default {
  title: 'Children',
  component: Children,
};

export const Primary = () => <Children color="primary" />;
export const Secondary = () => <Children color="secondary" />;
export const Color = () => <Children color={color('color', '#00FF00')} />;
    