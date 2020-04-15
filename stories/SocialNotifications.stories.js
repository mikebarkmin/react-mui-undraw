
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialNotifications from '../src/SocialNotifications';

export default {
  title: 'SocialNotifications',
  component: SocialNotifications,
};

export const Primary = () => <SocialNotifications color="primary" />;
export const Secondary = () => <SocialNotifications color="secondary" />;
export const Color = () => <SocialNotifications color={color('color', '#00FF00')} />;
    