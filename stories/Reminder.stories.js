
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Reminder from '../src/Reminder';

export default {
  title: 'Reminder',
  component: Reminder,
};

export const Primary = () => <Reminder color="primary" />;
export const Secondary = () => <Reminder color="secondary" />;
export const Color = () => <Reminder color={color('color', '#00FF00')} />;
    