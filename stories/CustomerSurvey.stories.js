
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CustomerSurvey from '../src/CustomerSurvey';

export default {
  title: 'CustomerSurvey',
  component: CustomerSurvey,
};

export const Primary = () => <CustomerSurvey color="primary" />;
export const Secondary = () => <CustomerSurvey color="secondary" />;
export const Color = () => <CustomerSurvey color={color('color', '#00FF00')} />;
    