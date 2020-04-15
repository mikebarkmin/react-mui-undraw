
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Barbecue from '../src/Barbecue';

export default {
  title: 'Barbecue',
  component: Barbecue,
};

export const Primary = () => <Barbecue color="primary" />;
export const Secondary = () => <Barbecue color="secondary" />;
export const Color = () => <Barbecue color={color('color', '#00FF00')} />;
    