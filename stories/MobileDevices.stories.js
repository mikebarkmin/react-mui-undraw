
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileDevices from '../src/MobileDevices';

export default {
  title: 'MobileDevices',
  component: MobileDevices,
};

export const Primary = () => <MobileDevices color="primary" />;
export const Secondary = () => <MobileDevices color="secondary" />;
export const Color = () => <MobileDevices color={color('color', '#00FF00')} />;
    