
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CompletedSteps from '../src/CompletedSteps';

export default {
  title: 'CompletedSteps',
  component: CompletedSteps,
};

export const Primary = () => <CompletedSteps color="primary" />;
export const Secondary = () => <CompletedSteps color="secondary" />;
export const Color = () => <CompletedSteps color={color('color', '#00FF00')} />;
    