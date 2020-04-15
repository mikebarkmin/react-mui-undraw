
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PayOnline from '../src/PayOnline';

export default {
  title: 'PayOnline',
  component: PayOnline,
};

export const Primary = () => <PayOnline color="primary" />;
export const Secondary = () => <PayOnline color="secondary" />;
export const Color = () => <PayOnline color={color('color', '#00FF00')} />;
    