
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Algolia from '../src/Algolia';

export default {
  title: 'Algolia',
  component: Algolia,
};

export const Primary = () => <Algolia color="primary" />;
export const Secondary = () => <Algolia color="secondary" />;
export const Color = () => <Algolia color={color('color', '#00FF00')} />;
    