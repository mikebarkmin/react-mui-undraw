
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Houses from '../src/Houses';

export default {
  title: 'Houses',
  component: Houses,
};

export const Primary = () => <Houses color="primary" />;
export const Secondary = () => <Houses color="secondary" />;
export const Color = () => <Houses color={color('color', '#00FF00')} />;
    