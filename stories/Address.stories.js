
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Address from '../src/Address';

export default {
  title: 'Address',
  component: Address,
};

export const Primary = () => <Address color="primary" />;
export const Secondary = () => <Address color="secondary" />;
export const Color = () => <Address color={color('color', '#00FF00')} />;
    