
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Broadcast from '../src/Broadcast';

export default {
  title: 'Broadcast',
  component: Broadcast,
};

export const Primary = () => <Broadcast color="primary" />;
export const Secondary = () => <Broadcast color="secondary" />;
export const Color = () => <Broadcast color={color('color', '#00FF00')} />;
    