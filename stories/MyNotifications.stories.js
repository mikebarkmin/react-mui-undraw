
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyNotifications from '../src/MyNotifications';

export default {
  title: 'MyNotifications',
  component: MyNotifications,
};

export const Primary = () => <MyNotifications color="primary" />;
export const Secondary = () => <MyNotifications color="secondary" />;
export const Color = () => <MyNotifications color={color('color', '#00FF00')} />;
    