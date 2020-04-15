
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StartBuilding from '../src/StartBuilding';

export default {
  title: 'StartBuilding',
  component: StartBuilding,
};

export const Primary = () => <StartBuilding color="primary" />;
export const Secondary = () => <StartBuilding color="secondary" />;
export const Color = () => <StartBuilding color={color('color', '#00FF00')} />;
    