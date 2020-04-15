
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AlienScience from '../src/AlienScience';

export default {
  title: 'AlienScience',
  component: AlienScience,
};

export const Primary = () => <AlienScience color="primary" />;
export const Secondary = () => <AlienScience color="secondary" />;
export const Color = () => <AlienScience color={color('color', '#00FF00')} />;
    