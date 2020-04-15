
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ToyCar from '../src/ToyCar';

export default {
  title: 'ToyCar',
  component: ToyCar,
};

export const Primary = () => <ToyCar color="primary" />;
export const Secondary = () => <ToyCar color="secondary" />;
export const Color = () => <ToyCar color={color('color', '#00FF00')} />;
    