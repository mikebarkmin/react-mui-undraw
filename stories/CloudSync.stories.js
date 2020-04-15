
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CloudSync from '../src/CloudSync';

export default {
  title: 'CloudSync',
  component: CloudSync,
};

export const Primary = () => <CloudSync color="primary" />;
export const Secondary = () => <CloudSync color="secondary" />;
export const Color = () => <CloudSync color={color('color', '#00FF00')} />;
    