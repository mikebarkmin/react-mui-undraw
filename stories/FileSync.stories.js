
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileSync from '../src/FileSync';

export default {
  title: 'FileSync',
  component: FileSync,
};

export const Primary = () => <FileSync color="primary" />;
export const Secondary = () => <FileSync color="secondary" />;
export const Color = () => <FileSync color={color('color', '#00FF00')} />;
    