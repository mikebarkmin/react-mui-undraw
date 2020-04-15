
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalFinance from '../src/PersonalFinance';

export default {
  title: 'PersonalFinance',
  component: PersonalFinance,
};

export const Primary = () => <PersonalFinance color="primary" />;
export const Secondary = () => <PersonalFinance color="secondary" />;
export const Color = () => <PersonalFinance color={color('color', '#00FF00')} />;
    