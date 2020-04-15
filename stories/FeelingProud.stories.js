
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FeelingProud from '../src/FeelingProud';

export default {
  title: 'FeelingProud',
  component: FeelingProud,
};

export const Primary = () => <FeelingProud color="primary" />;
export const Secondary = () => <FeelingProud color="secondary" />;
export const Color = () => <FeelingProud color={color('color', '#00FF00')} />;
    