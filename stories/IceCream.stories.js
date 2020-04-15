
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IceCream from '../src/IceCream';

export default {
  title: 'IceCream',
  component: IceCream,
};

export const Primary = () => <IceCream color="primary" />;
export const Secondary = () => <IceCream color="secondary" />;
export const Color = () => <IceCream color={color('color', '#00FF00')} />;
    