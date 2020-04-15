
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Photos from '../src/Photos';

export default {
  title: 'Photos',
  component: Photos,
};

export const Primary = () => <Photos color="primary" />;
export const Secondary = () => <Photos color="secondary" />;
export const Color = () => <Photos color={color('color', '#00FF00')} />;
    