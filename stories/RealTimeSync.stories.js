
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RealTimeSync from '../src/RealTimeSync';

export default {
  title: 'RealTimeSync',
  component: RealTimeSync,
};

export const Primary = () => <RealTimeSync color="primary" />;
export const Secondary = () => <RealTimeSync color="secondary" />;
export const Color = () => <RealTimeSync color={color('color', '#00FF00')} />;
    