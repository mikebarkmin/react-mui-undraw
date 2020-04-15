
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Savings from '../src/Savings';

export default {
  title: 'Savings',
  component: Savings,
};

export const Primary = () => <Savings color="primary" />;
export const Secondary = () => <Savings color="secondary" />;
export const Color = () => <Savings color={color('color', '#00FF00')} />;
    