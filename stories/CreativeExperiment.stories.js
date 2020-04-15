
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeExperiment from '../src/CreativeExperiment';

export default {
  title: 'CreativeExperiment',
  component: CreativeExperiment,
};

export const Primary = () => <CreativeExperiment color="primary" />;
export const Secondary = () => <CreativeExperiment color="secondary" />;
export const Color = () => <CreativeExperiment color={color('color', '#00FF00')} />;
    