
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CareerDevelopment from '../src/CareerDevelopment';

export default {
  title: 'CareerDevelopment',
  component: CareerDevelopment,
};

export const Primary = () => <CareerDevelopment color="primary" />;
export const Secondary = () => <CareerDevelopment color="secondary" />;
export const Color = () => <CareerDevelopment color={color('color', '#00FF00')} />;
    