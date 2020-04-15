
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Lost from '../src/Lost';

export default {
  title: 'Lost',
  component: Lost,
};

export const Primary = () => <Lost color="primary" />;
export const Secondary = () => <Lost color="secondary" />;
export const Color = () => <Lost color={color('color', '#00FF00')} />;
    