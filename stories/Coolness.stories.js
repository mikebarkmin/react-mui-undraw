
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Coolness from '../src/Coolness';

export default {
  title: 'Coolness',
  component: Coolness,
};

export const Primary = () => <Coolness color="primary" />;
export const Secondary = () => <Coolness color="secondary" />;
export const Color = () => <Coolness color={color('color', '#00FF00')} />;
    