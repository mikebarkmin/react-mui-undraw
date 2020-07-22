
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Cooking from '../src/Cooking';

export default {
  title: 'Cooking',
  component: Cooking,
};

export const Primary = () => <Cooking color="primary" />;
export const Secondary = () => <Cooking color="secondary" />;
export const Color = () => <Cooking color={color('color', '#00FF00')} />;
    