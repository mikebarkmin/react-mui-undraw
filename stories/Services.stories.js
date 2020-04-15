
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Services from '../src/Services';

export default {
  title: 'Services',
  component: Services,
};

export const Primary = () => <Services color="primary" />;
export const Secondary = () => <Services color="secondary" />;
export const Color = () => <Services color={color('color', '#00FF00')} />;
    