
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VirtualReality from '../src/VirtualReality';

export default {
  title: 'VirtualReality',
  component: VirtualReality,
};

export const Primary = () => <VirtualReality color="primary" />;
export const Secondary = () => <VirtualReality color="secondary" />;
export const Color = () => <VirtualReality color={color('color', '#00FF00')} />;
    