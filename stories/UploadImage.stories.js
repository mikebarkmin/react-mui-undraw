
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UploadImage from '../src/UploadImage';

export default {
  title: 'UploadImage',
  component: UploadImage,
};

export const Primary = () => <UploadImage color="primary" />;
export const Secondary = () => <UploadImage color="secondary" />;
export const Color = () => <UploadImage color={color('color', '#00FF00')} />;
    