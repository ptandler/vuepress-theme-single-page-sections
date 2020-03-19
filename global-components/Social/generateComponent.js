import Icon from "./Icon"

export function generateComponent(name, iconName, iconColor, urlGenerator) {
  // todo: if urlGenerator is null/undefined then
  //  1. use property `url` instead of `id` and
  //  2. don't include the computed url
  return {
    name: name,
    props: {
      title: { type: String, default: name },
      id: { type: String, required: true },
      scale: { type: Number, required: false },
      text: { type: String, required: false },
      iconName: { type: String, default: iconName },
      iconColor: { type: String, default: iconColor },
    },
    components: { Icon },
    computed: {
      url: urlGenerator,
    },
  }
}

export function generateComponentWithEmbeddedLogo(name, logo, urlGenerator) {
  const component = generateComponent(name, null, null, urlGenerator)
  component.components.ComponentLogo = logo
  return component
}
