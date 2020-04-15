
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StepToTheSun from '../src/StepToTheSun';

export default {
  title: 'StepToTheSun',
  component: StepToTheSun,
};

export const Primary = () => <StepToTheSun color="primary" />;
export const Secondary = () => <StepToTheSun color="secondary" />;
export const Color = () => <StepToTheSun color={color('color', '#00FF00')} />;
    