
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Tasting from '../src/Tasting';

export default {
  title: 'Tasting',
  component: Tasting,
};

export const Primary = () => <Tasting color="primary" />;
export const Secondary = () => <Tasting color="secondary" />;
export const Color = () => <Tasting color={color('color', '#00FF00')} />;
    