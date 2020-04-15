
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ServerCluster from '../src/ServerCluster';

export default {
  title: 'ServerCluster',
  component: ServerCluster,
};

export const Primary = () => <ServerCluster color="primary" />;
export const Secondary = () => <ServerCluster color="secondary" />;
export const Color = () => <ServerCluster color={color('color', '#00FF00')} />;
    