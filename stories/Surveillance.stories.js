
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Surveillance from '../src/Surveillance';

export default {
  title: 'Surveillance',
  component: Surveillance,
};

export const Primary = () => <Surveillance color="primary" />;
export const Secondary = () => <Surveillance color="secondary" />;
export const Color = () => <Surveillance color={color('color', '#00FF00')} />;
    