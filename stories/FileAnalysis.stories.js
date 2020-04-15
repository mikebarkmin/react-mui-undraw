
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileAnalysis from '../src/FileAnalysis';

export default {
  title: 'FileAnalysis',
  component: FileAnalysis,
};

export const Primary = () => <FileAnalysis color="primary" />;
export const Secondary = () => <FileAnalysis color="secondary" />;
export const Color = () => <FileAnalysis color={color('color', '#00FF00')} />;
    