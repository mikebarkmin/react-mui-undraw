
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Subscriptions from '../src/Subscriptions';

export default {
  title: 'Subscriptions',
  component: Subscriptions,
};

export const Primary = () => <Subscriptions color="primary" />;
export const Secondary = () => <Subscriptions color="secondary" />;
export const Color = () => <Subscriptions color={color('color', '#00FF00')} />;
    