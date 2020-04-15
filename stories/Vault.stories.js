
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Vault from '../src/Vault';

export default {
  title: 'Vault',
  component: Vault,
};

export const Primary = () => <Vault color="primary" />;
export const Secondary = () => <Vault color="secondary" />;
export const Color = () => <Vault color={color('color', '#00FF00')} />;
    