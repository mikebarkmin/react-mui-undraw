
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FeelingHappy from '../src/FeelingHappy';

export default {
  title: 'FeelingHappy',
  component: FeelingHappy,
};

export const Primary = () => <FeelingHappy color="primary" />;
export const Secondary = () => <FeelingHappy color="secondary" />;
export const Color = () => <FeelingHappy color={color('color', '#00FF00')} />;
    