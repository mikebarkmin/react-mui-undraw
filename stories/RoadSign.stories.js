
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RoadSign from '../src/RoadSign';

export default {
  title: 'RoadSign',
  component: RoadSign,
};

export const Primary = () => <RoadSign color="primary" />;
export const Secondary = () => <RoadSign color="secondary" />;
export const Color = () => <RoadSign color={color('color', '#00FF00')} />;
    