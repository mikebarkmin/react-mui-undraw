
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProblemSolving from '../src/ProblemSolving';

export default {
  title: 'ProblemSolving',
  component: ProblemSolving,
};

export const Primary = () => <ProblemSolving color="primary" />;
export const Secondary = () => <ProblemSolving color="secondary" />;
export const Color = () => <ProblemSolving color={color('color', '#00FF00')} />;
    