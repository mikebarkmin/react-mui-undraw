
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PenTool from '../src/PenTool';

export default {
  title: 'PenTool',
  component: PenTool,
};

export const Primary = () => <PenTool color="primary" />;
export const Secondary = () => <PenTool color="secondary" />;
export const Color = () => <PenTool color={color('color', '#00FF00')} />;
    