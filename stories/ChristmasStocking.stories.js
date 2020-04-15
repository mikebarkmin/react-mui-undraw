
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChristmasStocking from '../src/ChristmasStocking';

export default {
  title: 'ChristmasStocking',
  component: ChristmasStocking,
};

export const Primary = () => <ChristmasStocking color="primary" />;
export const Secondary = () => <ChristmasStocking color="secondary" />;
export const Color = () => <ChristmasStocking color={color('color', '#00FF00')} />;
    