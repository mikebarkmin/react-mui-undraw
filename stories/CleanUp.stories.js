
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CleanUp from '../src/CleanUp';

export default {
  title: 'CleanUp',
  component: CleanUp,
};

export const Primary = () => <CleanUp color="primary" />;
export const Secondary = () => <CleanUp color="secondary" />;
export const Color = () => <CleanUp color={color('color', '#00FF00')} />;
    