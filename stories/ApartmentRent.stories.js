
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ApartmentRent from '../src/ApartmentRent';

export default {
  title: 'ApartmentRent',
  component: ApartmentRent,
};

export const Primary = () => <ApartmentRent color="primary" />;
export const Secondary = () => <ApartmentRent color="secondary" />;
export const Color = () => <ApartmentRent color={color('color', '#00FF00')} />;
    