
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MintTea from '../src/MintTea';

export default {
  title: 'MintTea',
  component: MintTea,
};

export const Primary = () => <MintTea color="primary" />;
export const Secondary = () => <MintTea color="secondary" />;
export const Color = () => <MintTea color={color('color', '#00FF00')} />;
    