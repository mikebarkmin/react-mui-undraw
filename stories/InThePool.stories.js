
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InThePool from '../src/InThePool';

export default {
  title: 'InThePool',
  component: InThePool,
};

export const Primary = () => <InThePool color="primary" />;
export const Secondary = () => <InThePool color="secondary" />;
export const Color = () => <InThePool color={color('color', '#00FF00')} />;
    