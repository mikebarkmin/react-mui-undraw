
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AssetSelection from '../src/AssetSelection';

export default {
  title: 'AssetSelection',
  component: AssetSelection,
};

export const Primary = () => <AssetSelection color="primary" />;
export const Secondary = () => <AssetSelection color="secondary" />;
export const Color = () => <AssetSelection color={color('color', '#00FF00')} />;
    