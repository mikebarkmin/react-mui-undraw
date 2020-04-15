
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Chat from '../src/Chat';

export default {
  title: 'Chat',
  component: Chat,
};

export const Primary = () => <Chat color="primary" />;
export const Secondary = () => <Chat color="secondary" />;
export const Color = () => <Chat color={color('color', '#00FF00')} />;
    