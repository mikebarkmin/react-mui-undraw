
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Festivities from '../src/Festivities';

export default {
  title: 'Festivities',
  component: Festivities,
};

export const Primary = () => <Festivities color="primary" />;
export const Secondary = () => <Festivities color="secondary" />;
export const Color = () => <Festivities color={color('color', '#00FF00')} />;
    