
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Deliveries from '../src/Deliveries';

export default {
  title: 'Deliveries',
  component: Deliveries,
};

export const Primary = () => <Deliveries color="primary" />;
export const Secondary = () => <Deliveries color="secondary" />;
export const Color = () => <Deliveries color={color('color', '#00FF00')} />;
    