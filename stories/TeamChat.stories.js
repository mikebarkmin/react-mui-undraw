
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamChat from '../src/TeamChat';

export default {
  title: 'TeamChat',
  component: TeamChat,
};

export const Primary = () => <TeamChat color="primary" />;
export const Secondary = () => <TeamChat color="secondary" />;
export const Color = () => <TeamChat color={color('color', '#00FF00')} />;
    