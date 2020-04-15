
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineFriends from '../src/OnlineFriends';

export default {
  title: 'OnlineFriends',
  component: OnlineFriends,
};

export const Primary = () => <OnlineFriends color="primary" />;
export const Secondary = () => <OnlineFriends color="secondary" />;
export const Color = () => <OnlineFriends color={color('color', '#00FF00')} />;
    