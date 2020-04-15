
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoogleDocs from '../src/GoogleDocs';

export default {
  title: 'GoogleDocs',
  component: GoogleDocs,
};

export const Primary = () => <GoogleDocs color="primary" />;
export const Secondary = () => <GoogleDocs color="secondary" />;
export const Color = () => <GoogleDocs color={color('color', '#00FF00')} />;
    