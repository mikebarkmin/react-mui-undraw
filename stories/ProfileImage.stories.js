
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProfileImage from '../src/ProfileImage';

export default {
  title: 'ProfileImage',
  component: ProfileImage,
};

export const Primary = () => <ProfileImage color="primary" />;
export const Secondary = () => <ProfileImage color="secondary" />;
export const Color = () => <ProfileImage color={color('color', '#00FF00')} />;
    