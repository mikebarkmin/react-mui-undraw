
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ModernProfessional from '../src/ModernProfessional';

export default {
  title: 'ModernProfessional',
  component: ModernProfessional,
};

export const Primary = () => <ModernProfessional color="primary" />;
export const Secondary = () => <ModernProfessional color="secondary" />;
export const Color = () => <ModernProfessional color={color('color', '#00FF00')} />;
    