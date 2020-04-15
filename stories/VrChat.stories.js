
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VrChat from '../src/VrChat';

export default {
  title: 'VrChat',
  component: VrChat,
};

export const Primary = () => <VrChat color="primary" />;
export const Secondary = () => <VrChat color="secondary" />;
export const Color = () => <VrChat color={color('color', '#00FF00')} />;
    