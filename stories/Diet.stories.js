
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Diet from '../src/Diet';

export default {
  title: 'Diet',
  component: Diet,
};

export const Primary = () => <Diet color="primary" />;
export const Secondary = () => <Diet color="secondary" />;
export const Color = () => <Diet color={color('color', '#00FF00')} />;
    