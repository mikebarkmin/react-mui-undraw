
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Heatmap from '../src/Heatmap';

export default {
  title: 'Heatmap',
  component: Heatmap,
};

export const Primary = () => <Heatmap color="primary" />;
export const Secondary = () => <Heatmap color="secondary" />;
export const Color = () => <Heatmap color={color('color', '#00FF00')} />;
    