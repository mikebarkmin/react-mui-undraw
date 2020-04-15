
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Cabin from '../src/Cabin';

export default {
  title: 'Cabin',
  component: Cabin,
};

export const Primary = () => <Cabin color="primary" />;
export const Secondary = () => <Cabin color="secondary" />;
export const Color = () => <Cabin color={color('color', '#00FF00')} />;
    