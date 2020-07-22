
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineMessage from '../src/OnlineMessage';

export default {
  title: 'OnlineMessage',
  component: OnlineMessage,
};

export const Primary = () => <OnlineMessage color="primary" />;
export const Secondary = () => <OnlineMessage color="secondary" />;
export const Color = () => <OnlineMessage color={color('color', '#00FF00')} />;
    