import React from 'react'
import { Stack } from '@mui/system'
import { Alert } from '@mui/material'
const MessageSuccess = ({compraID}) => {
  return (
    
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Su compra fue finalizada con exito. ID de la compra: {compraID} </Alert>
    </Stack>
    
  )
}

export default MessageSuccess
