
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Update from '../src/Update';

export default {
  title: 'Update',
  component: Update,
};

export const Primary = () => <Update color="primary" />;
export const Secondary = () => <Update color="secondary" />;
export const Color = () => <Update color={color('color', '#00FF00')} />;
    