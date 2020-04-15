
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Envelope from '../src/Envelope';

export default {
  title: 'Envelope',
  component: Envelope,
};

export const Primary = () => <Envelope color="primary" />;
export const Secondary = () => <Envelope color="secondary" />;
export const Color = () => <Envelope color={color('color', '#00FF00')} />;
    