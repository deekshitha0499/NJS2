import { useRouter } from 'next/router';
import React from 'react'
import { featureData } from '../../../constants'
import DocumentationLayout from '../../../src/components/DocumentationLayout'
import { Description, DocumentTitle } from '../../../styles/globalStyle';

const CustomRouting = () => {
  const router = useRouter();
  const title:string=router.pathname.split('/')[3]

  return (
    <DocumentationLayout>
    <Description>{featureData.customRoutingFeature}</Description>
    </DocumentationLayout>
  )
}

export default CustomRouting