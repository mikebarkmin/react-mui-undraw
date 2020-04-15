
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Folder from '../src/Folder';

export default {
  title: 'Folder',
  component: Folder,
};

export const Primary = () => <Folder color="primary" />;
export const Secondary = () => <Folder color="secondary" />;
export const Color = () => <Folder color={color('color', '#00FF00')} />;
    