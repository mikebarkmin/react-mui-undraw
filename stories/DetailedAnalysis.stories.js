
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DetailedAnalysis from '../src/DetailedAnalysis';

export default {
  title: 'DetailedAnalysis',
  component: DetailedAnalysis,
};

export const Primary = () => <DetailedAnalysis color="primary" />;
export const Secondary = () => <DetailedAnalysis color="secondary" />;
export const Color = () => <DetailedAnalysis color={color('color', '#00FF00')} />;
    