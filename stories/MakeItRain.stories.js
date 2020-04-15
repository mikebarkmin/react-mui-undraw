
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MakeItRain from '../src/MakeItRain';

export default {
  title: 'MakeItRain',
  component: MakeItRain,
};

export const Primary = () => <MakeItRain color="primary" />;
export const Secondary = () => <MakeItRain color="secondary" />;
export const Color = () => <MakeItRain color={color('color', '#00FF00')} />;
    