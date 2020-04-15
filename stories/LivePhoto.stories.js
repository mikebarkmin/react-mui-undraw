
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LivePhoto from '../src/LivePhoto';

export default {
  title: 'LivePhoto',
  component: LivePhoto,
};

export const Primary = () => <LivePhoto color="primary" />;
export const Secondary = () => <LivePhoto color="secondary" />;
export const Color = () => <LivePhoto color={color('color', '#00FF00')} />;
    