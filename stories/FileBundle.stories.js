
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileBundle from '../src/FileBundle';

export default {
  title: 'FileBundle',
  component: FileBundle,
};

export const Primary = () => <FileBundle color="primary" />;
export const Secondary = () => <FileBundle color="secondary" />;
export const Color = () => <FileBundle color={color('color', '#00FF00')} />;
    