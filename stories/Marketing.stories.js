
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Marketing from '../src/Marketing';

export default {
  title: 'Marketing',
  component: Marketing,
};

export const Primary = () => <Marketing color="primary" />;
export const Secondary = () => <Marketing color="secondary" />;
export const Color = () => <Marketing color={color('color', '#00FF00')} />;
    