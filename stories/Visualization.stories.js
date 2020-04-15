
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Visualization from '../src/Visualization';

export default {
  title: 'Visualization',
  component: Visualization,
};

export const Primary = () => <Visualization color="primary" />;
export const Secondary = () => <Visualization color="secondary" />;
export const Color = () => <Visualization color={color('color', '#00FF00')} />;
    