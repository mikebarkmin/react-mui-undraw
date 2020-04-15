
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BeginChat from '../src/BeginChat';

export default {
  title: 'BeginChat',
  component: BeginChat,
};

export const Primary = () => <BeginChat color="primary" />;
export const Secondary = () => <BeginChat color="secondary" />;
export const Color = () => <BeginChat color={color('color', '#00FF00')} />;
    