
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Updates from '../src/Updates';

export default {
  title: 'Updates',
  component: Updates,
};

export const Primary = () => <Updates color="primary" />;
export const Secondary = () => <Updates color="secondary" />;
export const Color = () => <Updates color={color('color', '#00FF00')} />;
    