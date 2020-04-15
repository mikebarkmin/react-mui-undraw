
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RemoteTeam from '../src/RemoteTeam';

export default {
  title: 'RemoteTeam',
  component: RemoteTeam,
};

export const Primary = () => <RemoteTeam color="primary" />;
export const Secondary = () => <RemoteTeam color="secondary" />;
export const Color = () => <RemoteTeam color={color('color', '#00FF00')} />;
    