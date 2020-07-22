
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TextFiles from '../src/TextFiles';

export default {
  title: 'TextFiles',
  component: TextFiles,
};

export const Primary = () => <TextFiles color="primary" />;
export const Secondary = () => <TextFiles color="secondary" />;
export const Color = () => <TextFiles color={color('color', '#00FF00')} />;
    