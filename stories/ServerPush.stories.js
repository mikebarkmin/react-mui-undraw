
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ServerPush from '../src/ServerPush';

export default {
  title: 'ServerPush',
  component: ServerPush,
};

export const Primary = () => <ServerPush color="primary" />;
export const Secondary = () => <ServerPush color="secondary" />;
export const Color = () => <ServerPush color={color('color', '#00FF00')} />;
    