
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SolutionMindset from '../src/SolutionMindset';

export default {
  title: 'SolutionMindset',
  component: SolutionMindset,
};

export const Primary = () => <SolutionMindset color="primary" />;
export const Secondary = () => <SolutionMindset color="secondary" />;
export const Color = () => <SolutionMindset color={color('color', '#00FF00')} />;
    