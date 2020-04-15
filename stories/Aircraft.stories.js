
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Aircraft from '../src/Aircraft';

export default {
  title: 'Aircraft',
  component: Aircraft,
};

export const Primary = () => <Aircraft color="primary" />;
export const Secondary = () => <Aircraft color="secondary" />;
export const Color = () => <Aircraft color={color('color', '#00FF00')} />;
    