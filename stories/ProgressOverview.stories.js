
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProgressOverview from '../src/ProgressOverview';

export default {
  title: 'ProgressOverview',
  component: ProgressOverview,
};

export const Primary = () => <ProgressOverview color="primary" />;
export const Secondary = () => <ProgressOverview color="secondary" />;
export const Color = () => <ProgressOverview color={color('color', '#00FF00')} />;
    