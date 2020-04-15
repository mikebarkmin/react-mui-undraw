
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Drag from '../src/Drag';

export default {
  title: 'Drag',
  component: Drag,
};

export const Primary = () => <Drag color="primary" />;
export const Secondary = () => <Drag color="secondary" />;
export const Color = () => <Drag color={color('color', '#00FF00')} />;
    