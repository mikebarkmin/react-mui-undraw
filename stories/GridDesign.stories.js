
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GridDesign from '../src/GridDesign';

export default {
  title: 'GridDesign',
  component: GridDesign,
};

export const Primary = () => <GridDesign color="primary" />;
export const Secondary = () => <GridDesign color="secondary" />;
export const Color = () => <GridDesign color={color('color', '#00FF00')} />;
    