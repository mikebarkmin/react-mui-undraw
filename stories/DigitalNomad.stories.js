
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DigitalNomad from '../src/DigitalNomad';

export default {
  title: 'DigitalNomad',
  component: DigitalNomad,
};

export const Primary = () => <DigitalNomad color="primary" />;
export const Secondary = () => <DigitalNomad color="secondary" />;
export const Color = () => <DigitalNomad color={color('color', '#00FF00')} />;
    