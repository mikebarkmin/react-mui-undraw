
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ContainerShip from '../src/ContainerShip';

export default {
  title: 'ContainerShip',
  component: ContainerShip,
};

export const Primary = () => <ContainerShip color="primary" />;
export const Secondary = () => <ContainerShip color="secondary" />;
export const Color = () => <ContainerShip color={color('color', '#00FF00')} />;
    