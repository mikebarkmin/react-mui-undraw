
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SantaClaus from '../src/SantaClaus';

export default {
  title: 'SantaClaus',
  component: SantaClaus,
};

export const Primary = () => <SantaClaus color="primary" />;
export const Secondary = () => <SantaClaus color="secondary" />;
export const Color = () => <SantaClaus color={color('color', '#00FF00')} />;
    