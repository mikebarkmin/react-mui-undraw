
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Jewelry from '../src/Jewelry';

export default {
  title: 'Jewelry',
  component: Jewelry,
};

export const Primary = () => <Jewelry color="primary" />;
export const Secondary = () => <Jewelry color="secondary" />;
export const Color = () => <Jewelry color={color('color', '#00FF00')} />;
    