
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InstructionManual from '../src/InstructionManual';

export default {
  title: 'InstructionManual',
  component: InstructionManual,
};

export const Primary = () => <InstructionManual color="primary" />;
export const Secondary = () => <InstructionManual color="secondary" />;
export const Color = () => <InstructionManual color={color('color', '#00FF00')} />;
    