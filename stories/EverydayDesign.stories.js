
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EverydayDesign from '../src/EverydayDesign';

export default {
  title: 'EverydayDesign',
  component: EverydayDesign,
};

export const Primary = () => <EverydayDesign color="primary" />;
export const Secondary = () => <EverydayDesign color="secondary" />;
export const Color = () => <EverydayDesign color={color('color', '#00FF00')} />;
    