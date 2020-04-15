
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Science from '../src/Science';

export default {
  title: 'Science',
  component: Science,
};

export const Primary = () => <Science color="primary" />;
export const Secondary = () => <Science color="secondary" />;
export const Color = () => <Science color={color('color', '#00FF00')} />;
    