
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Dashboard from '../src/Dashboard';

export default {
  title: 'Dashboard',
  component: Dashboard,
};

export const Primary = () => <Dashboard color="primary" />;
export const Secondary = () => <Dashboard color="secondary" />;
export const Color = () => <Dashboard color={color('color', '#00FF00')} />;
    