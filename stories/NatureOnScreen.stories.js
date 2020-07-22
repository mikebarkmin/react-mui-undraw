
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NatureOnScreen from '../src/NatureOnScreen';

export default {
  title: 'NatureOnScreen',
  component: NatureOnScreen,
};

export const Primary = () => <NatureOnScreen color="primary" />;
export const Secondary = () => <NatureOnScreen color="secondary" />;
export const Color = () => <NatureOnScreen color={color('color', '#00FF00')} />;
    