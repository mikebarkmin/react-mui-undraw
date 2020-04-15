
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BackToSchool from '../src/BackToSchool';

export default {
  title: 'BackToSchool',
  component: BackToSchool,
};

export const Primary = () => <BackToSchool color="primary" />;
export const Secondary = () => <BackToSchool color="secondary" />;
export const Color = () => <BackToSchool color={color('color', '#00FF00')} />;
    