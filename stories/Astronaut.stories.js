
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Astronaut from '../src/Astronaut';

export default {
  title: 'Astronaut',
  component: Astronaut,
};

export const Primary = () => <Astronaut color="primary" />;
export const Secondary = () => <Astronaut color="secondary" />;
export const Color = () => <Astronaut color={color('color', '#00FF00')} />;
    