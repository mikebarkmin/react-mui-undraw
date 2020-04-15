
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HealthyOptions from '../src/HealthyOptions';

export default {
  title: 'HealthyOptions',
  component: HealthyOptions,
};

export const Primary = () => <HealthyOptions color="primary" />;
export const Secondary = () => <HealthyOptions color="secondary" />;
export const Color = () => <HealthyOptions color={color('color', '#00FF00')} />;
    