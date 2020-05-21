import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {
  safelyGetFrontMatter,
  withFallback,
  CMS_COMPONENTS,
  CMS_SHORTCODES,
} from "../cms"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"

export const HomePageTemplate = ({ title, sections, children }) => (
  <article>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    <p>Home Page Template</p>
    {withFallback(sections, []).map((section, i) => {
      return (
        <section key={i}>
          <h2>{section.title}</h2>
          <RenderMarkdown
            md={section.body}
          />
          <hr />
        </section>
      )
    })}
    <MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
      {children}
    </MDXProvider>
  </article>
)

const HomePage = ({ pageContext, ...props }) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(pageContext)}
      {...props}
      isPreview={false}
    />
  )
}

export default HomePage
