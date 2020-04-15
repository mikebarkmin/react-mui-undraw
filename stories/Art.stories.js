
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Art from '../src/Art';

export default {
  title: 'Art',
  component: Art,
};

export const Primary = () => <Art color="primary" />;
export const Secondary = () => <Art color="secondary" />;
export const Color = () => <Art color={color('color', '#00FF00')} />;
    