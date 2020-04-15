
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ToTheMoon from '../src/ToTheMoon';

export default {
  title: 'ToTheMoon',
  component: ToTheMoon,
};

export const Primary = () => <ToTheMoon color="primary" />;
export const Secondary = () => <ToTheMoon color="secondary" />;
export const Color = () => <ToTheMoon color={color('color', '#00FF00')} />;
    