
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Growing from '../src/Growing';

export default {
  title: 'Growing',
  component: Growing,
};

export const Primary = () => <Growing color="primary" />;
export const Secondary = () => <Growing color="secondary" />;
export const Color = () => <Growing color={color('color', '#00FF00')} />;
    