
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Motherhood from '../src/Motherhood';

export default {
  title: 'Motherhood',
  component: Motherhood,
};

export const Primary = () => <Motherhood color="primary" />;
export const Secondary = () => <Motherhood color="secondary" />;
export const Color = () => <Motherhood color={color('color', '#00FF00')} />;
    