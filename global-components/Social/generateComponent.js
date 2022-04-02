import Icon from "./Icon.vue"

export function generateComponent(name, iconName, iconColor, urlGenerator, additionalProps) {
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
      iconName: { type: Array, default: iconName },
      iconColor: { type: String, default: iconColor },
      ... additionalProps
    },
    components: { Icon },
    computed: {
      url: urlGenerator,
    },
  }
}

export function generateComponentWithEmbeddedLogo(name, logo, urlGenerator) {
  return {
    name: name,
    props: {
      title: { type: String, default: name },
      id: { type: String, required: true },
      scale: { type: Number, required: false },
      text: { type: String, required: false },
    },
    components: { Icon, ComponentLogo: logo },
    computed: {
      url: urlGenerator,
    },
  }
}
