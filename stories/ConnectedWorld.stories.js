
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ConnectedWorld from '../src/ConnectedWorld';

export default {
  title: 'ConnectedWorld',
  component: ConnectedWorld,
};

export const Primary = () => <ConnectedWorld color="primary" />;
export const Secondary = () => <ConnectedWorld color="secondary" />;
export const Color = () => <ConnectedWorld color={color('color', '#00FF00')} />;
    