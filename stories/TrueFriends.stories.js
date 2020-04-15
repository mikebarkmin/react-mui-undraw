
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TrueFriends from '../src/TrueFriends';

export default {
  title: 'TrueFriends',
  component: TrueFriends,
};

export const Primary = () => <TrueFriends color="primary" />;
export const Secondary = () => <TrueFriends color="secondary" />;
export const Color = () => <TrueFriends color={color('color', '#00FF00')} />;
    