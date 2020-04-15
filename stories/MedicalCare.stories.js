
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MedicalCare from '../src/MedicalCare';

export default {
  title: 'MedicalCare',
  component: MedicalCare,
};

export const Primary = () => <MedicalCare color="primary" />;
export const Secondary = () => <MedicalCare color="secondary" />;
export const Color = () => <MedicalCare color={color('color', '#00FF00')} />;
    