
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrdinaryDay from '../src/OrdinaryDay';

export default {
  title: 'OrdinaryDay',
  component: OrdinaryDay,
};

export const Primary = () => <OrdinaryDay color="primary" />;
export const Secondary = () => <OrdinaryDay color="secondary" />;
export const Color = () => <OrdinaryDay color={color('color', '#00FF00')} />;
    