
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Agree from '../src/Agree';

export default {
  title: 'Agree',
  component: Agree,
};

export const Primary = () => <Agree color="primary" />;
export const Secondary = () => <Agree color="secondary" />;
export const Color = () => <Agree color={color('color', '#00FF00')} />;
    