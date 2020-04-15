
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Events from '../src/Events';

export default {
  title: 'Events',
  component: Events,
};

export const Primary = () => <Events color="primary" />;
export const Secondary = () => <Events color="secondary" />;
export const Color = () => <Events color={color('color', '#00FF00')} />;
    