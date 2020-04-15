
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NatureFun from '../src/NatureFun';

export default {
  title: 'NatureFun',
  component: NatureFun,
};

export const Primary = () => <NatureFun color="primary" />;
export const Secondary = () => <NatureFun color="secondary" />;
export const Color = () => <NatureFun color={color('color', '#00FF00')} />;
    