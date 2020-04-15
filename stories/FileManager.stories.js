
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileManager from '../src/FileManager';

export default {
  title: 'FileManager',
  component: FileManager,
};

export const Primary = () => <FileManager color="primary" />;
export const Secondary = () => <FileManager color="secondary" />;
export const Color = () => <FileManager color={color('color', '#00FF00')} />;
    