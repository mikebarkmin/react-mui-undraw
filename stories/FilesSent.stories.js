
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FilesSent from '../src/FilesSent';

export default {
  title: 'FilesSent',
  component: FilesSent,
};

export const Primary = () => <FilesSent color="primary" />;
export const Secondary = () => <FilesSent color="secondary" />;
export const Color = () => <FilesSent color={color('color', '#00FF00')} />;
    