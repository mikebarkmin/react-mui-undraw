
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Judge from '../src/Judge';

export default {
  title: 'Judge',
  component: Judge,
};

export const Primary = () => <Judge color="primary" />;
export const Secondary = () => <Judge color="secondary" />;
export const Color = () => <Judge color={color('color', '#00FF00')} />;
    