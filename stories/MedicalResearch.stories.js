
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MedicalResearch from '../src/MedicalResearch';

export default {
  title: 'MedicalResearch',
  component: MedicalResearch,
};

export const Primary = () => <MedicalResearch color="primary" />;
export const Secondary = () => <MedicalResearch color="secondary" />;
export const Color = () => <MedicalResearch color={color('color', '#00FF00')} />;
    