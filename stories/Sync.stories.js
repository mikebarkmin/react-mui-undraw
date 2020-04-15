
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Sync from '../src/Sync';

export default {
  title: 'Sync',
  component: Sync,
};

export const Primary = () => <Sync color="primary" />;
export const Secondary = () => <Sync color="secondary" />;
export const Color = () => <Sync color={color('color', '#00FF00')} />;
    