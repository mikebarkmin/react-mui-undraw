
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mobile from '../src/Mobile';

export default {
  title: 'Mobile',
  component: Mobile,
};

export const Primary = () => <Mobile color="primary" />;
export const Secondary = () => <Mobile color="secondary" />;
export const Color = () => <Mobile color={color('color', '#00FF00')} />;
    