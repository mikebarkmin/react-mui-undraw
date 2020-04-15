
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Factory from '../src/Factory';

export default {
  title: 'Factory',
  component: Factory,
};

export const Primary = () => <Factory color="primary" />;
export const Secondary = () => <Factory color="secondary" />;
export const Color = () => <Factory color={color('color', '#00FF00')} />;
    