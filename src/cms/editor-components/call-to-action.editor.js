const ctaEditor = props =>
  `<CallToAction url="${props.url || ""}" align="center" bgColor="${props.bgColor}">${props.text || ""}</CallToAction>`

export const ctaEditorConfig = {
  // Internal id of the component
  id: "cta",
  // Visible label
  label: "Call to Action",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Text", name: "text", widget: "string" },
    { label: "Link", name: "url", widget: "string" },
    {
      label: "Background Color",
      name: "bgColor",
      widget: "colorpickers",
      default: "rebeccapurple"
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<CallToAction url="(\S+)" align="center" bgColor="(\S+)">(\S+)<\/CallToAction>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      url: match[1],
      bgColor: match[2],
      text: match[3]
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return ctaEditor(obj)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return ctaEditor(obj)
  },
}