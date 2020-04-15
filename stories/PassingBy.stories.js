
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PassingBy from '../src/PassingBy';

export default {
  title: 'PassingBy',
  component: PassingBy,
};

export const Primary = () => <PassingBy color="primary" />;
export const Secondary = () => <PassingBy color="secondary" />;
export const Color = () => <PassingBy color={color('color', '#00FF00')} />;
    