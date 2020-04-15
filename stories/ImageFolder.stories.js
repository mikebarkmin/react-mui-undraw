
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ImageFolder from '../src/ImageFolder';

export default {
  title: 'ImageFolder',
  component: ImageFolder,
};

export const Primary = () => <ImageFolder color="primary" />;
export const Secondary = () => <ImageFolder color="secondary" />;
export const Color = () => <ImageFolder color={color('color', '#00FF00')} />;
    