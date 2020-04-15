
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChatBot from '../src/ChatBot';

export default {
  title: 'ChatBot',
  component: ChatBot,
};

export const Primary = () => <ChatBot color="primary" />;
export const Secondary = () => <ChatBot color="secondary" />;
export const Color = () => <ChatBot color={color('color', '#00FF00')} />;
    