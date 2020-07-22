
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wilderness from '../src/Wilderness';

export default {
  title: 'Wilderness',
  component: Wilderness,
};

export const Primary = () => <Wilderness color="primary" />;
export const Secondary = () => <Wilderness color="secondary" />;
export const Color = () => <Wilderness color={color('color', '#00FF00')} />;
    