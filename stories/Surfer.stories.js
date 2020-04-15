
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Surfer from '../src/Surfer';

export default {
  title: 'Surfer',
  component: Surfer,
};

export const Primary = () => <Surfer color="primary" />;
export const Secondary = () => <Surfer color="secondary" />;
export const Color = () => <Surfer color={color('color', '#00FF00')} />;
    