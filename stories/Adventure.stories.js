
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Adventure from '../src/Adventure';

export default {
  title: 'Adventure',
  component: Adventure,
};

export const Primary = () => <Adventure color="primary" />;
export const Secondary = () => <Adventure color="secondary" />;
export const Color = () => <Adventure color={color('color', '#00FF00')} />;
    