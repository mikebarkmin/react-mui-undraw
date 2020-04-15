
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineChat from '../src/OnlineChat';

export default {
  title: 'OnlineChat',
  component: OnlineChat,
};

export const Primary = () => <OnlineChat color="primary" />;
export const Secondary = () => <OnlineChat color="secondary" />;
export const Color = () => <OnlineChat color={color('color', '#00FF00')} />;
    