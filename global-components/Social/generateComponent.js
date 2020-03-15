import Icon from "./Icon"

export function generateComponent(name, iconName, iconColor, urlGenerator) {
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
  