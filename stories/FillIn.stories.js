
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FillIn from '../src/FillIn';

export default {
  title: 'FillIn',
  component: FillIn,
};

export const Primary = () => <FillIn color="primary" />;
export const Secondary = () => <FillIn color="secondary" />;
export const Color = () => <FillIn color={color('color', '#00FF00')} />;
    