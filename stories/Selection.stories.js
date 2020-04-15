
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Selection from '../src/Selection';

export default {
  title: 'Selection',
  component: Selection,
};

export const Primary = () => <Selection color="primary" />;
export const Secondary = () => <Selection color="secondary" />;
export const Color = () => <Selection color={color('color', '#00FF00')} />;
    