
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FolderFiles from '../src/FolderFiles';

export default {
  title: 'FolderFiles',
  component: FolderFiles,
};

export const Primary = () => <FolderFiles color="primary" />;
export const Secondary = () => <FolderFiles color="secondary" />;
export const Color = () => <FolderFiles color={color('color', '#00FF00')} />;
    