
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Insert from '../src/Insert';

export default {
  title: 'Insert',
  component: Insert,
};

export const Primary = () => <Insert color="primary" />;
export const Secondary = () => <Insert color="secondary" />;
export const Color = () => <Insert color={color('color', '#00FF00')} />;
    