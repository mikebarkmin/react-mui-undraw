
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Functions from '../src/Functions';

export default {
  title: 'Functions',
  component: Functions,
};

export const Primary = () => <Functions color="primary" />;
export const Secondary = () => <Functions color="secondary" />;
export const Color = () => <Functions color={color('color', '#00FF00')} />;
    