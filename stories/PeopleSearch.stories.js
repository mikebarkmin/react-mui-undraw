
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PeopleSearch from '../src/PeopleSearch';

export default {
  title: 'PeopleSearch',
  component: PeopleSearch,
};

export const Primary = () => <PeopleSearch color="primary" />;
export const Secondary = () => <PeopleSearch color="secondary" />;
export const Color = () => <PeopleSearch color={color('color', '#00FF00')} />;
    