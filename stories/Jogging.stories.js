
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Jogging from '../src/Jogging';

export default {
  title: 'Jogging',
  component: Jogging,
};

export const Primary = () => <Jogging color="primary" />;
export const Secondary = () => <Jogging color="secondary" />;
export const Color = () => <Jogging color={color('color', '#00FF00')} />;
    