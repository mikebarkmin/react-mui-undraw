
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AttachedFile from '../src/AttachedFile';

export default {
  title: 'AttachedFile',
  component: AttachedFile,
};

export const Primary = () => <AttachedFile color="primary" />;
export const Secondary = () => <AttachedFile color="secondary" />;
export const Color = () => <AttachedFile color={color('color', '#00FF00')} />;
    