
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebDevices from '../src/WebDevices';

export default {
  title: 'WebDevices',
  component: WebDevices,
};

export const Primary = () => <WebDevices color="primary" />;
export const Secondary = () => <WebDevices color="secondary" />;
export const Color = () => <WebDevices color={color('color', '#00FF00')} />;
    