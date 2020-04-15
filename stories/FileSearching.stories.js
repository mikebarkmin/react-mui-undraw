
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileSearching from '../src/FileSearching';

export default {
  title: 'FileSearching',
  component: FileSearching,
};

export const Primary = () => <FileSearching color="primary" />;
export const Secondary = () => <FileSearching color="secondary" />;
export const Color = () => <FileSearching color={color('color', '#00FF00')} />;
    