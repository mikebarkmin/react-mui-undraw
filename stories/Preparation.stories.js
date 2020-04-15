
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Preparation from '../src/Preparation';

export default {
  title: 'Preparation',
  component: Preparation,
};

export const Primary = () => <Preparation color="primary" />;
export const Secondary = () => <Preparation color="secondary" />;
export const Color = () => <Preparation color={color('color', '#00FF00')} />;
    