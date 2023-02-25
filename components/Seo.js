/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui";
import React from "react";
import Head from "next/head"

const SeoComp = ({title,opengraphUrl,metaDesc,}) => {
  return (
    <Head>
     {title ?  <title>{title.replace("- admin.netart.io","")}</title> : null}
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={opengraphUrl} />
      {title ? <meta property="og:title" content={title.replace("- admin.netart.io","")} />:null}
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={opengraphUrl} />
      <meta property="og:image" content="/images/Icon.png" />
      <meta property="og:site_name" content="NetArt" />
      <meta name="twitter:card" content="summary_large_image" />
      {title ?<meta name="twitter:title" content={title.replace("- admin.netart.io","")} />:null}
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:site" content="@NETART_India" />
      <meta name="twitter:creator" content="@NETART_India" />
     
    </Head>
  )
}

export default SeoComp