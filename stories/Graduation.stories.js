
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Graduation from '../src/Graduation';

export default {
  title: 'Graduation',
  component: Graduation,
};

export const Primary = () => <Graduation color="primary" />;
export const Secondary = () => <Graduation color="secondary" />;
export const Color = () => <Graduation color={color('color', '#00FF00')} />;
    