
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InstatAnalysis from '../src/InstatAnalysis';

export default {
  title: 'InstatAnalysis',
  component: InstatAnalysis,
};

export const Primary = () => <InstatAnalysis color="primary" />;
export const Secondary = () => <InstatAnalysis color="secondary" />;
export const Color = () => <InstatAnalysis color={color('color', '#00FF00')} />;
    