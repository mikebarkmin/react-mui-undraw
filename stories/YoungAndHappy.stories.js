
import React from 'react';
import { color } from '@storybook/addon-knobs';
import YoungAndHappy from '../src/YoungAndHappy';

export default {
  title: 'YoungAndHappy',
  component: YoungAndHappy,
};

export const Primary = () => <YoungAndHappy color="primary" />;
export const Secondary = () => <YoungAndHappy color="secondary" />;
export const Color = () => <YoungAndHappy color={color('color', '#00FF00')} />;
    