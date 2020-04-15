
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Nakamoto from '../src/Nakamoto';

export default {
  title: 'Nakamoto',
  component: Nakamoto,
};

export const Primary = () => <Nakamoto color="primary" />;
export const Secondary = () => <Nakamoto color="secondary" />;
export const Color = () => <Nakamoto color={color('color', '#00FF00')} />;
    