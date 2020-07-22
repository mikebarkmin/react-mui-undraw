
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IndoorBike from '../src/IndoorBike';

export default {
  title: 'IndoorBike',
  component: IndoorBike,
};

export const Primary = () => <IndoorBike color="primary" />;
export const Secondary = () => <IndoorBike color="secondary" />;
export const Color = () => <IndoorBike color={color('color', '#00FF00')} />;
    