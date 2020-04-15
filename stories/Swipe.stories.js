
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Swipe from '../src/Swipe';

export default {
  title: 'Swipe',
  component: Swipe,
};

export const Primary = () => <Swipe color="primary" />;
export const Secondary = () => <Swipe color="secondary" />;
export const Color = () => <Swipe color={color('color', '#00FF00')} />;
    