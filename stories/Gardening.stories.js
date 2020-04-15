
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gardening from '../src/Gardening';

export default {
  title: 'Gardening',
  component: Gardening,
};

export const Primary = () => <Gardening color="primary" />;
export const Secondary = () => <Gardening color="secondary" />;
export const Color = () => <Gardening color={color('color', '#00FF00')} />;
    