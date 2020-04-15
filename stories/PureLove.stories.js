
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PureLove from '../src/PureLove';

export default {
  title: 'PureLove',
  component: PureLove,
};

export const Primary = () => <PureLove color="primary" />;
export const Secondary = () => <PureLove color="secondary" />;
export const Color = () => <PureLove color={color('color', '#00FF00')} />;
    