
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EnvironmentalStudy from '../src/EnvironmentalStudy';

export default {
  title: 'EnvironmentalStudy',
  component: EnvironmentalStudy,
};

export const Primary = () => <EnvironmentalStudy color="primary" />;
export const Secondary = () => <EnvironmentalStudy color="secondary" />;
export const Color = () => <EnvironmentalStudy color={color('color', '#00FF00')} />;
    