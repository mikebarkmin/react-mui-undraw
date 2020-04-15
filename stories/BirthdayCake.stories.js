
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BirthdayCake from '../src/BirthdayCake';

export default {
  title: 'BirthdayCake',
  component: BirthdayCake,
};

export const Primary = () => <BirthdayCake color="primary" />;
export const Secondary = () => <BirthdayCake color="secondary" />;
export const Color = () => <BirthdayCake color={color('color', '#00FF00')} />;
    