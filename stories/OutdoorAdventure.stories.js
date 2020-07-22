
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OutdoorAdventure from '../src/OutdoorAdventure';

export default {
  title: 'OutdoorAdventure',
  component: OutdoorAdventure,
};

export const Primary = () => <OutdoorAdventure color="primary" />;
export const Secondary = () => <OutdoorAdventure color="secondary" />;
export const Color = () => <OutdoorAdventure color={color('color', '#00FF00')} />;
    