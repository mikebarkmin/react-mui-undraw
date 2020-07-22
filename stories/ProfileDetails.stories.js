
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProfileDetails from '../src/ProfileDetails';

export default {
  title: 'ProfileDetails',
  component: ProfileDetails,
};

export const Primary = () => <ProfileDetails color="primary" />;
export const Secondary = () => <ProfileDetails color="secondary" />;
export const Color = () => <ProfileDetails color={color('color', '#00FF00')} />;
    