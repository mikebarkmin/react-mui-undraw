
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ElectricCar from '../src/ElectricCar';

export default {
  title: 'ElectricCar',
  component: ElectricCar,
};

export const Primary = () => <ElectricCar color="primary" />;
export const Secondary = () => <ElectricCar color="secondary" />;
export const Color = () => <ElectricCar color={color('color', '#00FF00')} />;
    