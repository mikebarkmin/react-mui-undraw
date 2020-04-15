
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HealthyLifestyle from '../src/HealthyLifestyle';

export default {
  title: 'HealthyLifestyle',
  component: HealthyLifestyle,
};

export const Primary = () => <HealthyLifestyle color="primary" />;
export const Secondary = () => <HealthyLifestyle color="secondary" />;
export const Color = () => <HealthyLifestyle color={color('color', '#00FF00')} />;
    