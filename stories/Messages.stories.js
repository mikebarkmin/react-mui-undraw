
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Messages from '../src/Messages';

export default {
  title: 'Messages',
  component: Messages,
};

export const Primary = () => <Messages color="primary" />;
export const Secondary = () => <Messages color="secondary" />;
export const Color = () => <Messages color={color('color', '#00FF00')} />;
    