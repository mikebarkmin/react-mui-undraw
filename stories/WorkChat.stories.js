
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkChat from '../src/WorkChat';

export default {
  title: 'WorkChat',
  component: WorkChat,
};

export const Primary = () => <WorkChat color="primary" />;
export const Secondary = () => <WorkChat color="secondary" />;
export const Color = () => <WorkChat color={color('color', '#00FF00')} />;
    