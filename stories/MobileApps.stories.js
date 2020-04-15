
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileApps from '../src/MobileApps';

export default {
  title: 'MobileApps',
  component: MobileApps,
};

export const Primary = () => <MobileApps color="primary" />;
export const Secondary = () => <MobileApps color="secondary" />;
export const Color = () => <MobileApps color={color('color', '#00FF00')} />;
    