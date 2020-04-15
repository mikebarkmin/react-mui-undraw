
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialFriends from '../src/SocialFriends';

export default {
  title: 'SocialFriends',
  component: SocialFriends,
};

export const Primary = () => <SocialFriends color="primary" />;
export const Secondary = () => <SocialFriends color="secondary" />;
export const Color = () => <SocialFriends color={color('color', '#00FF00')} />;
    