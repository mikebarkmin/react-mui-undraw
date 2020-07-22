
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NewNotifications from '../src/NewNotifications';

export default {
  title: 'NewNotifications',
  component: NewNotifications,
};

export const Primary = () => <NewNotifications color="primary" />;
export const Secondary = () => <NewNotifications color="secondary" />;
export const Color = () => <NewNotifications color={color('color', '#00FF00')} />;
    