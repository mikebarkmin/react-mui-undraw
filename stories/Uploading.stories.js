
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Uploading from '../src/Uploading';

export default {
  title: 'Uploading',
  component: Uploading,
};

export const Primary = () => <Uploading color="primary" />;
export const Secondary = () => <Uploading color="secondary" />;
export const Color = () => <Uploading color={color('color', '#00FF00')} />;
    