
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Bibliophile from '../src/Bibliophile';

export default {
  title: 'Bibliophile',
  component: Bibliophile,
};

export const Primary = () => <Bibliophile color="primary" />;
export const Secondary = () => <Bibliophile color="secondary" />;
export const Color = () => <Bibliophile color={color('color', '#00FF00')} />;
    