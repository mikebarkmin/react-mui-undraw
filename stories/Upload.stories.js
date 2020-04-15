
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Upload from '../src/Upload';

export default {
  title: 'Upload',
  component: Upload,
};

export const Primary = () => <Upload color="primary" />;
export const Secondary = () => <Upload color="secondary" />;
export const Color = () => <Upload color={color('color', '#00FF00')} />;
    