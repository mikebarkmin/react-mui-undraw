
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ICanFly from '../src/ICanFly';

export default {
  title: 'ICanFly',
  component: ICanFly,
};

export const Primary = () => <ICanFly color="primary" />;
export const Secondary = () => <ICanFly color="secondary" />;
export const Color = () => <ICanFly color={color('color', '#00FF00')} />;
    