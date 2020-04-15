
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ServerStatus from '../src/ServerStatus';

export default {
  title: 'ServerStatus',
  component: ServerStatus,
};

export const Primary = () => <ServerStatus color="primary" />;
export const Secondary = () => <ServerStatus color="secondary" />;
export const Color = () => <ServerStatus color={color('color', '#00FF00')} />;
    