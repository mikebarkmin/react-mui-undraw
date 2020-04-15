
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SmileyFace from '../src/SmileyFace';

export default {
  title: 'SmileyFace',
  component: SmileyFace,
};

export const Primary = () => <SmileyFace color="primary" />;
export const Secondary = () => <SmileyFace color="secondary" />;
export const Color = () => <SmileyFace color={color('color', '#00FF00')} />;
    