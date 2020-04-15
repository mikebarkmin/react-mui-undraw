
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Segment from '../src/Segment';

export default {
  title: 'Segment',
  component: Segment,
};

export const Primary = () => <Segment color="primary" />;
export const Secondary = () => <Segment color="secondary" />;
export const Color = () => <Segment color={color('color', '#00FF00')} />;
    