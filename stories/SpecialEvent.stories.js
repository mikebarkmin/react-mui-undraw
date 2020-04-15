
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SpecialEvent from '../src/SpecialEvent';

export default {
  title: 'SpecialEvent',
  component: SpecialEvent,
};

export const Primary = () => <SpecialEvent color="primary" />;
export const Secondary = () => <SpecialEvent color="secondary" />;
export const Color = () => <SpecialEvent color={color('color', '#00FF00')} />;
    