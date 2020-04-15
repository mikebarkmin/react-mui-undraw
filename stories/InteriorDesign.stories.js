
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InteriorDesign from '../src/InteriorDesign';

export default {
  title: 'InteriorDesign',
  component: InteriorDesign,
};

export const Primary = () => <InteriorDesign color="primary" />;
export const Secondary = () => <InteriorDesign color="secondary" />;
export const Color = () => <InteriorDesign color={color('color', '#00FF00')} />;
    