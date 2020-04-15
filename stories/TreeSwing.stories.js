
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TreeSwing from '../src/TreeSwing';

export default {
  title: 'TreeSwing',
  component: TreeSwing,
};

export const Primary = () => <TreeSwing color="primary" />;
export const Secondary = () => <TreeSwing color="secondary" />;
export const Color = () => <TreeSwing color={color('color', '#00FF00')} />;
    