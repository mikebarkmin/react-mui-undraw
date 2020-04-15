
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Photo from '../src/Photo';

export default {
  title: 'Photo',
  component: Photo,
};

export const Primary = () => <Photo color="primary" />;
export const Secondary = () => <Photo color="secondary" />;
export const Color = () => <Photo color={color('color', '#00FF00')} />;
    