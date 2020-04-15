
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CityGirl from '../src/CityGirl';

export default {
  title: 'CityGirl',
  component: CityGirl,
};

export const Primary = () => <CityGirl color="primary" />;
export const Secondary = () => <CityGirl color="secondary" />;
export const Color = () => <CityGirl color={color('color', '#00FF00')} />;
    