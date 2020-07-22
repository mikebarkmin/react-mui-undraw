
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CohortAnalysis from '../src/CohortAnalysis';

export default {
  title: 'CohortAnalysis',
  component: CohortAnalysis,
};

export const Primary = () => <CohortAnalysis color="primary" />;
export const Secondary = () => <CohortAnalysis color="secondary" />;
export const Color = () => <CohortAnalysis color={color('color', '#00FF00')} />;
    