
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Partying from '../src/Partying';

export default {
  title: 'Partying',
  component: Partying,
};

export const Primary = () => <Partying color="primary" />;
export const Secondary = () => <Partying color="secondary" />;
export const Color = () => <Partying color={color('color', '#00FF00')} />;
    