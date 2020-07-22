
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ABetterWorld from '../src/ABetterWorld';

export default {
  title: 'ABetterWorld',
  component: ABetterWorld,
};

export const Primary = () => <ABetterWorld color="primary" />;
export const Secondary = () => <ABetterWorld color="secondary" />;
export const Color = () => <ABetterWorld color={color('color', '#00FF00')} />;
    