
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BestPlace from '../src/BestPlace';

export default {
  title: 'BestPlace',
  component: BestPlace,
};

export const Primary = () => <BestPlace color="primary" />;
export const Secondary = () => <BestPlace color="secondary" />;
export const Color = () => <BestPlace color={color('color', '#00FF00')} />;
    