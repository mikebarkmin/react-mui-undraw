
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Reminders from '../src/Reminders';

export default {
  title: 'Reminders',
  component: Reminders,
};

export const Primary = () => <Reminders color="primary" />;
export const Secondary = () => <Reminders color="secondary" />;
export const Color = () => <Reminders color={color('color', '#00FF00')} />;
    