
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Journey from '../src/Journey';

export default {
  title: 'Journey',
  component: Journey,
};

export const Primary = () => <Journey color="primary" />;
export const Secondary = () => <Journey color="secondary" />;
export const Color = () => <Journey color={color('color', '#00FF00')} />;
    