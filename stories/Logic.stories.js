
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Logic from '../src/Logic';

export default {
  title: 'Logic',
  component: Logic,
};

export const Primary = () => <Logic color="primary" />;
export const Secondary = () => <Logic color="secondary" />;
export const Color = () => <Logic color={color('color', '#00FF00')} />;
    