
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ConnectingTeams from '../src/ConnectingTeams';

export default {
  title: 'ConnectingTeams',
  component: ConnectingTeams,
};

export const Primary = () => <ConnectingTeams color="primary" />;
export const Secondary = () => <ConnectingTeams color="secondary" />;
export const Color = () => <ConnectingTeams color={color('color', '#00FF00')} />;
    