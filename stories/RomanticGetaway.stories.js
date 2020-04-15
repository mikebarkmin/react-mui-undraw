
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RomanticGetaway from '../src/RomanticGetaway';

export default {
  title: 'RomanticGetaway',
  component: RomanticGetaway,
};

export const Primary = () => <RomanticGetaway color="primary" />;
export const Secondary = () => <RomanticGetaway color="secondary" />;
export const Color = () => <RomanticGetaway color={color('color', '#00FF00')} />;
    