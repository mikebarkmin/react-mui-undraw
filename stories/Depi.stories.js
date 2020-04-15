
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Depi from '../src/Depi';

export default {
  title: 'Depi',
  component: Depi,
};

export const Primary = () => <Depi color="primary" />;
export const Secondary = () => <Depi color="secondary" />;
export const Color = () => <Depi color={color('color', '#00FF00')} />;
    