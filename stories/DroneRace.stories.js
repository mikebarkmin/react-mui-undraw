
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DroneRace from '../src/DroneRace';

export default {
  title: 'DroneRace',
  component: DroneRace,
};

export const Primary = () => <DroneRace color="primary" />;
export const Secondary = () => <DroneRace color="secondary" />;
export const Color = () => <DroneRace color={color('color', '#00FF00')} />;
    