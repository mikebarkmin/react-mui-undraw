
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CompleteDesign from '../src/CompleteDesign';

export default {
  title: 'CompleteDesign',
  component: CompleteDesign,
};

export const Primary = () => <CompleteDesign color="primary" />;
export const Secondary = () => <CompleteDesign color="secondary" />;
export const Color = () => <CompleteDesign color={color('color', '#00FF00')} />;
    