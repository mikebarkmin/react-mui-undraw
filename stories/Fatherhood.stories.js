
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fatherhood from '../src/Fatherhood';

export default {
  title: 'Fatherhood',
  component: Fatherhood,
};

export const Primary = () => <Fatherhood color="primary" />;
export const Secondary = () => <Fatherhood color="secondary" />;
export const Color = () => <Fatherhood color={color('color', '#00FF00')} />;
    