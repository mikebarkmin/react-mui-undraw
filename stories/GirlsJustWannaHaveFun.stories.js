
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GirlsJustWannaHaveFun from '../src/GirlsJustWannaHaveFun';

export default {
  title: 'GirlsJustWannaHaveFun',
  component: GirlsJustWannaHaveFun,
};

export const Primary = () => <GirlsJustWannaHaveFun color="primary" />;
export const Secondary = () => <GirlsJustWannaHaveFun color="secondary" />;
export const Color = () => <GirlsJustWannaHaveFun color={color('color', '#00FF00')} />;
    