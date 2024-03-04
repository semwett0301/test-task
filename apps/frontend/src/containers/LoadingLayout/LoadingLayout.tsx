import React, { FC, PropsWithChildren } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { PropsWithClassName } from '../../types/utils/PropsWithClassName';

interface Props {
  isLoading: boolean;
}

const LoadingLayout: FC<PropsWithClassName<PropsWithChildren<Props>>> = ({
                                                                           children,
                                                                           className,
                                                                           isLoading ,
                                                                         }) => {
  if (isLoading) {
    return (
      <Box className={className} display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
        <CircularProgress />
      </Box>
    );
  }

  return children;
};

export default LoadingLayout;
