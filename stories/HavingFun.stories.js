
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HavingFun from '../src/HavingFun';

export default {
  title: 'HavingFun',
  component: HavingFun,
};

export const Primary = () => <HavingFun color="primary" />;
export const Secondary = () => <HavingFun color="secondary" />;
export const Color = () => <HavingFun color={color('color', '#00FF00')} />;
    