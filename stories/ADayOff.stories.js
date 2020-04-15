
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ADayOff from '../src/ADayOff';

export default {
  title: 'ADayOff',
  component: ADayOff,
};

export const Primary = () => <ADayOff color="primary" />;
export const Secondary = () => <ADayOff color="secondary" />;
export const Color = () => <ADayOff color={color('color', '#00FF00')} />;
    