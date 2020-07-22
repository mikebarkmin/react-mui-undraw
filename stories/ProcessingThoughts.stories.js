
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProcessingThoughts from '../src/ProcessingThoughts';

export default {
  title: 'ProcessingThoughts',
  component: ProcessingThoughts,
};

export const Primary = () => <ProcessingThoughts color="primary" />;
export const Secondary = () => <ProcessingThoughts color="secondary" />;
export const Color = () => <ProcessingThoughts color={color('color', '#00FF00')} />;
    