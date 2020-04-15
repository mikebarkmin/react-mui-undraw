
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Yoga from '../src/Yoga';

export default {
  title: 'Yoga',
  component: Yoga,
};

export const Primary = () => <Yoga color="primary" />;
export const Secondary = () => <Yoga color="secondary" />;
export const Color = () => <Yoga color={color('color', '#00FF00')} />;
    