
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Ideation from '../src/Ideation';

export default {
  title: 'Ideation',
  component: Ideation,
};

export const Primary = () => <Ideation color="primary" />;
export const Secondary = () => <Ideation color="secondary" />;
export const Color = () => <Ideation color={color('color', '#00FF00')} />;
    