
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FriendsOnline from '../src/FriendsOnline';

export default {
  title: 'FriendsOnline',
  component: FriendsOnline,
};

export const Primary = () => <FriendsOnline color="primary" />;
export const Secondary = () => <FriendsOnline color="secondary" />;
export const Color = () => <FriendsOnline color={color('color', '#00FF00')} />;
    