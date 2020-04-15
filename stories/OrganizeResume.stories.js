
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrganizeResume from '../src/OrganizeResume';

export default {
  title: 'OrganizeResume',
  component: OrganizeResume,
};

export const Primary = () => <OrganizeResume color="primary" />;
export const Secondary = () => <OrganizeResume color="secondary" />;
export const Color = () => <OrganizeResume color={color('color', '#00FF00')} />;
    