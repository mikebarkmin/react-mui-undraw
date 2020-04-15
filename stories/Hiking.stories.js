
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hiking from '../src/Hiking';

export default {
  title: 'Hiking',
  component: Hiking,
};

export const Primary = () => <Hiking color="primary" />;
export const Secondary = () => <Hiking color="secondary" />;
export const Color = () => <Hiking color={color('color', '#00FF00')} />;
    