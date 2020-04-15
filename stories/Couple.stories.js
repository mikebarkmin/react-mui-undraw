
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Couple from '../src/Couple';

export default {
  title: 'Couple',
  component: Couple,
};

export const Primary = () => <Couple color="primary" />;
export const Secondary = () => <Couple color="secondary" />;
export const Color = () => <Couple color={color('color', '#00FF00')} />;
    