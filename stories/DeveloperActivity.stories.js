
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DeveloperActivity from '../src/DeveloperActivity';

export default {
  title: 'DeveloperActivity',
  component: DeveloperActivity,
};

export const Primary = () => <DeveloperActivity color="primary" />;
export const Secondary = () => <DeveloperActivity color="secondary" />;
export const Color = () => <DeveloperActivity color={color('color', '#00FF00')} />;
    