
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AtThePark from '../src/AtThePark';

export default {
  title: 'AtThePark',
  component: AtThePark,
};

export const Primary = () => <AtThePark color="primary" />;
export const Secondary = () => <AtThePark color="secondary" />;
export const Color = () => <AtThePark color={color('color', '#00FF00')} />;
    