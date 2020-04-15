
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Checklist from '../src/Checklist';

export default {
  title: 'Checklist',
  component: Checklist,
};

export const Primary = () => <Checklist color="primary" />;
export const Secondary = () => <Checklist color="secondary" />;
export const Color = () => <Checklist color={color('color', '#00FF00')} />;
    