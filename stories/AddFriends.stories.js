
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddFriends from '../src/AddFriends';

export default {
  title: 'AddFriends',
  component: AddFriends,
};

export const Primary = () => <AddFriends color="primary" />;
export const Secondary = () => <AddFriends color="secondary" />;
export const Color = () => <AddFriends color={color('color', '#00FF00')} />;
    