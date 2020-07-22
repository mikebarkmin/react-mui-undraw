
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PushNotifications from '../src/PushNotifications';

export default {
  title: 'PushNotifications',
  component: PushNotifications,
};

export const Primary = () => <PushNotifications color="primary" />;
export const Secondary = () => <PushNotifications color="secondary" />;
export const Color = () => <PushNotifications color={color('color', '#00FF00')} />;
    