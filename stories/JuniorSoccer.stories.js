
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JuniorSoccer from '../src/JuniorSoccer';

export default {
  title: 'JuniorSoccer',
  component: JuniorSoccer,
};

export const Primary = () => <JuniorSoccer color="primary" />;
export const Secondary = () => <JuniorSoccer color="secondary" />;
export const Color = () => <JuniorSoccer color={color('color', '#00FF00')} />;
    