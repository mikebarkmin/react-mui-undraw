
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Profile from '../src/Profile';

export default {
  title: 'Profile',
  component: Profile,
};

export const Primary = () => <Profile color="primary" />;
export const Secondary = () => <Profile color="secondary" />;
export const Color = () => <Profile color={color('color', '#00FF00')} />;
    