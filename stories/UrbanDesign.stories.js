
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UrbanDesign from '../src/UrbanDesign';

export default {
  title: 'UrbanDesign',
  component: UrbanDesign,
};

export const Primary = () => <UrbanDesign color="primary" />;
export const Secondary = () => <UrbanDesign color="secondary" />;
export const Color = () => <UrbanDesign color={color('color', '#00FF00')} />;
    