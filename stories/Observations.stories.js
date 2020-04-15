
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Observations from '../src/Observations';

export default {
  title: 'Observations',
  component: Observations,
};

export const Primary = () => <Observations color="primary" />;
export const Secondary = () => <Observations color="secondary" />;
export const Color = () => <Observations color={color('color', '#00FF00')} />;
    