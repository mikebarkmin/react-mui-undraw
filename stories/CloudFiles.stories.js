
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CloudFiles from '../src/CloudFiles';

export default {
  title: 'CloudFiles',
  component: CloudFiles,
};

export const Primary = () => <CloudFiles color="primary" />;
export const Secondary = () => <CloudFiles color="secondary" />;
export const Color = () => <CloudFiles color={color('color', '#00FF00')} />;
    