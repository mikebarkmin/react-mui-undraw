
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OsUpgrade from '../src/OsUpgrade';

export default {
  title: 'OsUpgrade',
  component: OsUpgrade,
};

export const Primary = () => <OsUpgrade color="primary" />;
export const Secondary = () => <OsUpgrade color="secondary" />;
export const Color = () => <OsUpgrade color={color('color', '#00FF00')} />;
    