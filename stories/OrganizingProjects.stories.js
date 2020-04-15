
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrganizingProjects from '../src/OrganizingProjects';

export default {
  title: 'OrganizingProjects',
  component: OrganizingProjects,
};

export const Primary = () => <OrganizingProjects color="primary" />;
export const Secondary = () => <OrganizingProjects color="secondary" />;
export const Color = () => <OrganizingProjects color={color('color', '#00FF00')} />;
    