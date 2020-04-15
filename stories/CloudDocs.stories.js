
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CloudDocs from '../src/CloudDocs';

export default {
  title: 'CloudDocs',
  component: CloudDocs,
};

export const Primary = () => <CloudDocs color="primary" />;
export const Secondary = () => <CloudDocs color="secondary" />;
export const Color = () => <CloudDocs color={color('color', '#00FF00')} />;
    