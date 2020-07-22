
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelectHouse from '../src/SelectHouse';

export default {
  title: 'SelectHouse',
  component: SelectHouse,
};

export const Primary = () => <SelectHouse color="primary" />;
export const Secondary = () => <SelectHouse color="secondary" />;
export const Color = () => <SelectHouse color={color('color', '#00FF00')} />;
    