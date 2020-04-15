
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Meditating from '../src/Meditating';

export default {
  title: 'Meditating',
  component: Meditating,
};

export const Primary = () => <Meditating color="primary" />;
export const Secondary = () => <Meditating color="secondary" />;
export const Color = () => <Meditating color={color('color', '#00FF00')} />;
    