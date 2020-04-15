
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PieGraph from '../src/PieGraph';

export default {
  title: 'PieGraph',
  component: PieGraph,
};

export const Primary = () => <PieGraph color="primary" />;
export const Secondary = () => <PieGraph color="secondary" />;
export const Color = () => <PieGraph color={color('color', '#00FF00')} />;
    