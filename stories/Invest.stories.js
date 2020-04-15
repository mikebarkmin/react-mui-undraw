
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Invest from '../src/Invest';

export default {
  title: 'Invest',
  component: Invest,
};

export const Primary = () => <Invest color="primary" />;
export const Secondary = () => <Invest color="secondary" />;
export const Color = () => <Invest color={color('color', '#00FF00')} />;
    