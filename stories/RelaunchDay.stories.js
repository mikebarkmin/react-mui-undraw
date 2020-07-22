
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RelaunchDay from '../src/RelaunchDay';

export default {
  title: 'RelaunchDay',
  component: RelaunchDay,
};

export const Primary = () => <RelaunchDay color="primary" />;
export const Secondary = () => <RelaunchDay color="secondary" />;
export const Color = () => <RelaunchDay color={color('color', '#00FF00')} />;
    