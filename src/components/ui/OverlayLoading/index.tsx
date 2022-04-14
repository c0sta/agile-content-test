import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import * as SC from './styles'

const OverlayLoading = () => (
  <SC.OverlayLoading>
    <ThreeDots color="#2e754b" height={80} width={80} />
    <p>Loading...</p>
  </SC.OverlayLoading>
)

export default OverlayLoading
