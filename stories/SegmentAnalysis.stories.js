
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SegmentAnalysis from '../src/SegmentAnalysis';

export default {
  title: 'SegmentAnalysis',
  component: SegmentAnalysis,
};

export const Primary = () => <SegmentAnalysis color="primary" />;
export const Secondary = () => <SegmentAnalysis color="secondary" />;
export const Color = () => <SegmentAnalysis color={color('color', '#00FF00')} />;
    