
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Segmentation from '../src/Segmentation';

export default {
  title: 'Segmentation',
  component: Segmentation,
};

export const Primary = () => <Segmentation color="primary" />;
export const Secondary = () => <Segmentation color="secondary" />;
export const Color = () => <Segmentation color={color('color', '#00FF00')} />;
    