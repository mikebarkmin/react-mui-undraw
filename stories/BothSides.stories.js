
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BothSides from '../src/BothSides';

export default {
  title: 'BothSides',
  component: BothSides,
};

export const Primary = () => <BothSides color="primary" />;
export const Secondary = () => <BothSides color="secondary" />;
export const Color = () => <BothSides color={color('color', '#00FF00')} />;
    