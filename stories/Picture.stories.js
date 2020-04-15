
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Picture from '../src/Picture';

export default {
  title: 'Picture',
  component: Picture,
};

export const Primary = () => <Picture color="primary" />;
export const Secondary = () => <Picture color="secondary" />;
export const Color = () => <Picture color={color('color', '#00FF00')} />;
    