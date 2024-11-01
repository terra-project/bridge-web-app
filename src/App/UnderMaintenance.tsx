import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import maintenancePng from 'images/maintenance.png'

import { COLOR } from 'consts'

import { Text, View } from 'components'

import FormImage from 'components/FormImage'

const StyledBg = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${COLOR.darkGray};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
const StyledContainer = styled(View)`
  margin: auto;
  align-items: center;
  max-width: 640px;
  padding: 40px;
  border-radius: 2em;
  @media (max-width: 1199px) {
    padding: 40px;
  }
  @media (max-width: 575px) {
    border-radius: 0;
    padding: 20px;
  }
`

const StyledTitle = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  @media (max-width: 575px) {
    margin-bottom: 8px;
  }
`

const StyledDesc = styled(Text)`
  font-size: 16px;
  margin-bottom: 28px;
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`

const UnderMaintenance = (): ReactElement => {
  const [hideMaintenance] = useState(false)
  const isUnderMaintenance = true

  if (isUnderMaintenance && false === hideMaintenance) {
    return (
      <StyledBg>
        <StyledContainer>
          <View style={{ marginBottom: 20 }}>
            <FormImage size={80} src={maintenancePng} />
          </View>
          <StyledTitle>Terra Classic Shuttle Bridge</StyledTitle>
          <StyledDesc>
            The service has been shut down as of 31 October 2024.
          </StyledDesc>
        </StyledContainer>
      </StyledBg>
    )
  }
  return <View />
}

export default UnderMaintenance
