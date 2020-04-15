
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Letter from '../src/Letter';

export default {
  title: 'Letter',
  component: Letter,
};

export const Primary = () => <Letter color="primary" />;
export const Secondary = () => <Letter color="secondary" />;
export const Color = () => <Letter color={color('color', '#00FF00')} />;
    