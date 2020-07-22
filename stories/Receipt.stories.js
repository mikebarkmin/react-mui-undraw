
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Receipt from '../src/Receipt';

export default {
  title: 'Receipt',
  component: Receipt,
};

export const Primary = () => <Receipt color="primary" />;
export const Secondary = () => <Receipt color="secondary" />;
export const Color = () => <Receipt color={color('color', '#00FF00')} />;
    