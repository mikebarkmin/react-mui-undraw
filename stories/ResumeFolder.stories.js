
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ResumeFolder from '../src/ResumeFolder';

export default {
  title: 'ResumeFolder',
  component: ResumeFolder,
};

export const Primary = () => <ResumeFolder color="primary" />;
export const Secondary = () => <ResumeFolder color="secondary" />;
export const Color = () => <ResumeFolder color={color('color', '#00FF00')} />;
    