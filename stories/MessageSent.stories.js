
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MessageSent from '../src/MessageSent';

export default {
  title: 'MessageSent',
  component: MessageSent,
};

export const Primary = () => <MessageSent color="primary" />;
export const Secondary = () => <MessageSent color="secondary" />;
export const Color = () => <MessageSent color={color('color', '#00FF00')} />;
    