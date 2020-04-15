
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DecorativeFriends from '../src/DecorativeFriends';

export default {
  title: 'DecorativeFriends',
  component: DecorativeFriends,
};

export const Primary = () => <DecorativeFriends color="primary" />;
export const Secondary = () => <DecorativeFriends color="secondary" />;
export const Color = () => <DecorativeFriends color={color('color', '#00FF00')} />;
    