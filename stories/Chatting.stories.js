
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Chatting from '../src/Chatting';

export default {
  title: 'Chatting',
  component: Chatting,
};

export const Primary = () => <Chatting color="primary" />;
export const Secondary = () => <Chatting color="secondary" />;
export const Color = () => <Chatting color={color('color', '#00FF00')} />;
    