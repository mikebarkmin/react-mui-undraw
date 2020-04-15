
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CareerProgress from '../src/CareerProgress';

export default {
  title: 'CareerProgress',
  component: CareerProgress,
};

export const Primary = () => <CareerProgress color="primary" />;
export const Secondary = () => <CareerProgress color="secondary" />;
export const Color = () => <CareerProgress color={color('color', '#00FF00')} />;
    