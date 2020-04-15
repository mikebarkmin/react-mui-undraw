
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChoosingHouse from '../src/ChoosingHouse';

export default {
  title: 'ChoosingHouse',
  component: ChoosingHouse,
};

export const Primary = () => <ChoosingHouse color="primary" />;
export const Secondary = () => <ChoosingHouse color="secondary" />;
export const Color = () => <ChoosingHouse color={color('color', '#00FF00')} />;
    