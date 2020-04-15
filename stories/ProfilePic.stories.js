
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProfilePic from '../src/ProfilePic';

export default {
  title: 'ProfilePic',
  component: ProfilePic,
};

export const Primary = () => <ProfilePic color="primary" />;
export const Secondary = () => <ProfilePic color="secondary" />;
export const Color = () => <ProfilePic color={color('color', '#00FF00')} />;
    