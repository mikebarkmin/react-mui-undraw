
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Party from '../src/Party';

export default {
  title: 'Party',
  component: Party,
};

export const Primary = () => <Party color="primary" />;
export const Secondary = () => <Party color="secondary" />;
export const Color = () => <Party color={color('color', '#00FF00')} />;
    