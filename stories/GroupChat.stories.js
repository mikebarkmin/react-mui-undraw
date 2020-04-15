
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GroupChat from '../src/GroupChat';

export default {
  title: 'GroupChat',
  component: GroupChat,
};

export const Primary = () => <GroupChat color="primary" />;
export const Secondary = () => <GroupChat color="secondary" />;
export const Color = () => <GroupChat color={color('color', '#00FF00')} />;
    