
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BuildingBlocks from '../src/BuildingBlocks';

export default {
  title: 'BuildingBlocks',
  component: BuildingBlocks,
};

export const Primary = () => <BuildingBlocks color="primary" />;
export const Secondary = () => <BuildingBlocks color="secondary" />;
export const Color = () => <BuildingBlocks color={color('color', '#00FF00')} />;
    