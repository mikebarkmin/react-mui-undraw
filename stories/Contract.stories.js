
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Contract from '../src/Contract';

export default {
  title: 'Contract',
  component: Contract,
};

export const Primary = () => <Contract color="primary" />;
export const Secondary = () => <Contract color="secondary" />;
export const Color = () => <Contract color={color('color', '#00FF00')} />;
    