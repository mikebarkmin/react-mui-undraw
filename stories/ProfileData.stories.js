
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProfileData from '../src/ProfileData';

export default {
  title: 'ProfileData',
  component: ProfileData,
};

export const Primary = () => <ProfileData color="primary" />;
export const Secondary = () => <ProfileData color="secondary" />;
export const Color = () => <ProfileData color={color('color', '#00FF00')} />;
    