
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MindMap from '../src/MindMap';

export default {
  title: 'MindMap',
  component: MindMap,
};

export const Primary = () => <MindMap color="primary" />;
export const Secondary = () => <MindMap color="secondary" />;
export const Color = () => <MindMap color={color('color', '#00FF00')} />;
    