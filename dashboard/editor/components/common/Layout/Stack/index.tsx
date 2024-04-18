import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function StackLayout({noOfItems, stackProps}) {
  return (
    <Stack {...stackProps}>
        {noOfItems && noOfItems?.map((item) => item)}
    </Stack>
  );
}