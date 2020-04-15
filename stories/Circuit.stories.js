
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Circuit from '../src/Circuit';

export default {
  title: 'Circuit',
  component: Circuit,
};

export const Primary = () => <Circuit color="primary" />;
export const Secondary = () => <Circuit color="secondary" />;
export const Color = () => <Circuit color={color('color', '#00FF00')} />;
    