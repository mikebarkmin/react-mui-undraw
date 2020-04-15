
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileInterface from '../src/MobileInterface';

export default {
  title: 'MobileInterface',
  component: MobileInterface,
};

export const Primary = () => <MobileInterface color="primary" />;
export const Secondary = () => <MobileInterface color="secondary" />;
export const Color = () => <MobileInterface color={color('color', '#00FF00')} />;
    