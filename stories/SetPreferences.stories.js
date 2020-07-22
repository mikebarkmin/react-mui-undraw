
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SetPreferences from '../src/SetPreferences';

export default {
  title: 'SetPreferences',
  component: SetPreferences,
};

export const Primary = () => <SetPreferences color="primary" />;
export const Secondary = () => <SetPreferences color="secondary" />;
export const Color = () => <SetPreferences color={color('color', '#00FF00')} />;
    