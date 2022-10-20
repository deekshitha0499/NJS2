import React from 'react'
import { featureData } from '../../../constants'
import DocumentationLayout from '../../../src/components/DocumentationLayout'

const CustomRouting = () => {
  return (
    <DocumentationLayout>
    <p>{featureData.customRoutingFeature}</p>
    </DocumentationLayout>
  )
}

export default CustomRouting