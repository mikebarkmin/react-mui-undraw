
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MakingArt from '../src/MakingArt';

export default {
  title: 'MakingArt',
  component: MakingArt,
};

export const Primary = () => <MakingArt color="primary" />;
export const Secondary = () => <MakingArt color="secondary" />;
export const Color = () => <MakingArt color={color('color', '#00FF00')} />;
    