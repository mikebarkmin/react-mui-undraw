
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CardPostal from '../src/CardPostal';

export default {
  title: 'CardPostal',
  component: CardPostal,
};

export const Primary = () => <CardPostal color="primary" />;
export const Secondary = () => <CardPostal color="secondary" />;
export const Color = () => <CardPostal color={color('color', '#00FF00')} />;
    