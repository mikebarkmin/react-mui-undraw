
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hologram from '../src/Hologram';

export default {
  title: 'Hologram',
  component: Hologram,
};

export const Primary = () => <Hologram color="primary" />;
export const Secondary = () => <Hologram color="secondary" />;
export const Color = () => <Hologram color={color('color', '#00FF00')} />;
    