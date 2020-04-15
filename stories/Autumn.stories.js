
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Autumn from '../src/Autumn';

export default {
  title: 'Autumn',
  component: Autumn,
};

export const Primary = () => <Autumn color="primary" />;
export const Secondary = () => <Autumn color="secondary" />;
export const Color = () => <Autumn color={color('color', '#00FF00')} />;
    