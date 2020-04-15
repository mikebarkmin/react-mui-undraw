
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StatusUpdate from '../src/StatusUpdate';

export default {
  title: 'StatusUpdate',
  component: StatusUpdate,
};

export const Primary = () => <StatusUpdate color="primary" />;
export const Secondary = () => <StatusUpdate color="secondary" />;
export const Color = () => <StatusUpdate color={color('color', '#00FF00')} />;
    