import CMS from "netlify-cms-app"

import NetlifyCmsWidgetColorpickers from 'netlify-cms-widget-colorpickers';

import { HomePagePreview, DefaultPagePreview } from "./preview-templates"
import { ctaEditorConfig, testimonialEditorConfig } from "./editor-components"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../app.css"

// Add Widgets
CMS.registerWidget([
    NetlifyCmsWidgetColorpickers.Widget()
])

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
CMS.registerEditorComponent(testimonialEditorConfig)