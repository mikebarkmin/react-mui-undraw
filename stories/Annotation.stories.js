
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Annotation from '../src/Annotation';

export default {
  title: 'Annotation',
  component: Annotation,
};

export const Primary = () => <Annotation color="primary" />;
export const Secondary = () => <Annotation color="secondary" />;
export const Color = () => <Annotation color={color('color', '#00FF00')} />;
    