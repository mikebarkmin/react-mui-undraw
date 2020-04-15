
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Inspection from '../src/Inspection';

export default {
  title: 'Inspection',
  component: Inspection,
};

export const Primary = () => <Inspection color="primary" />;
export const Secondary = () => <Inspection color="secondary" />;
export const Color = () => <Inspection color={color('color', '#00FF00')} />;
    