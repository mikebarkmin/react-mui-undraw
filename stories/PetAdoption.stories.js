
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PetAdoption from '../src/PetAdoption';

export default {
  title: 'PetAdoption',
  component: PetAdoption,
};

export const Primary = () => <PetAdoption color="primary" />;
export const Secondary = () => <PetAdoption color="secondary" />;
export const Color = () => <PetAdoption color={color('color', '#00FF00')} />;
    