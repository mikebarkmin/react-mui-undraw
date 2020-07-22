
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RemoteDesignTeam from '../src/RemoteDesignTeam';

export default {
  title: 'RemoteDesignTeam',
  component: RemoteDesignTeam,
};

export const Primary = () => <RemoteDesignTeam color="primary" />;
export const Secondary = () => <RemoteDesignTeam color="secondary" />;
export const Color = () => <RemoteDesignTeam color={color('color', '#00FF00')} />;
    