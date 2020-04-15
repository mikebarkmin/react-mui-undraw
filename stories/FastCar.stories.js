
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FastCar from '../src/FastCar';

export default {
  title: 'FastCar',
  component: FastCar,
};

export const Primary = () => <FastCar color="primary" />;
export const Secondary = () => <FastCar color="secondary" />;
export const Color = () => <FastCar color={color('color', '#00FF00')} />;
    