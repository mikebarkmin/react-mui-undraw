
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Personalization from '../src/Personalization';

export default {
  title: 'Personalization',
  component: Personalization,
};

export const Primary = () => <Personalization color="primary" />;
export const Secondary = () => <Personalization color="secondary" />;
export const Color = () => <Personalization color={color('color', '#00FF00')} />;
    