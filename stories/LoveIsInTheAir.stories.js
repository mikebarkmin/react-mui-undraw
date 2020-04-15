
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LoveIsInTheAir from '../src/LoveIsInTheAir';

export default {
  title: 'LoveIsInTheAir',
  component: LoveIsInTheAir,
};

export const Primary = () => <LoveIsInTheAir color="primary" />;
export const Secondary = () => <LoveIsInTheAir color="secondary" />;
export const Color = () => <LoveIsInTheAir color={color('color', '#00FF00')} />;
    