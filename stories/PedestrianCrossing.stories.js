
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PedestrianCrossing from '../src/PedestrianCrossing';

export default {
  title: 'PedestrianCrossing',
  component: PedestrianCrossing,
};

export const Primary = () => <PedestrianCrossing color="primary" />;
export const Secondary = () => <PedestrianCrossing color="secondary" />;
export const Color = () => <PedestrianCrossing color={color('color', '#00FF00')} />;
    