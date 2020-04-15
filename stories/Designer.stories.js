
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Designer from '../src/Designer';

export default {
  title: 'Designer',
  component: Designer,
};

export const Primary = () => <Designer color="primary" />;
export const Secondary = () => <Designer color="secondary" />;
export const Color = () => <Designer color={color('color', '#00FF00')} />;
    