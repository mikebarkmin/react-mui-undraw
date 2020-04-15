
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UnexpectedFriends from '../src/UnexpectedFriends';

export default {
  title: 'UnexpectedFriends',
  component: UnexpectedFriends,
};

export const Primary = () => <UnexpectedFriends color="primary" />;
export const Secondary = () => <UnexpectedFriends color="secondary" />;
export const Color = () => <UnexpectedFriends color={color('color', '#00FF00')} />;
    