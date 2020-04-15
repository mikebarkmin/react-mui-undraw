
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Tabs from '../src/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const Primary = () => <Tabs color="primary" />;
export const Secondary = () => <Tabs color="secondary" />;
export const Color = () => <Tabs color={color('color', '#00FF00')} />;
    