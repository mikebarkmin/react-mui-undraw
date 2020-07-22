
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DropdownMenu from '../src/DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
};

export const Primary = () => <DropdownMenu color="primary" />;
export const Secondary = () => <DropdownMenu color="secondary" />;
export const Color = () => <DropdownMenu color={color('color', '#00FF00')} />;
    