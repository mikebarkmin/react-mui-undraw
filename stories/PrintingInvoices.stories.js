
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PrintingInvoices from '../src/PrintingInvoices';

export default {
  title: 'PrintingInvoices',
  component: PrintingInvoices,
};

export const Primary = () => <PrintingInvoices color="primary" />;
export const Secondary = () => <PrintingInvoices color="secondary" />;
export const Color = () => <PrintingInvoices color={color('color', '#00FF00')} />;
    