<template>
  <Contact-Information
    :icon="icon"
    :title="title"
    :text="text"
    :url="url"
    :icon_only="icon_only"
    :scale="scale"
    :obfuscate="obfuscate"
  />
</template>
<script>
import "vue-awesome/icons/phone"
import "vue-awesome/icons/mobile"
import "vue-awesome/icons/mobile-alt"
function removeNonNumbers(phone) {
  return phone instanceof String ? phone.replace(/\D/g, "") : phone
}
export default {
  /**
   * strip everything that is not a digit from the phone number
   */
  name: "Contact-Phone",
  props: {
    country: String,
    city: String,
    number: String,
    title: { type: String, default: "Phone" },
    icon: { type: String, default: "phone" },
    scale: { type: Number, default: 1 },
    icon_only: { type: Boolean, default: false },
    obfuscate: { type: Boolean, default: true },
  },
  computed: {
    text() {
      return ["+", this.country || "49", " ", this.city, " ", this.number]
    },
    url() {
      return [
        "tel:+",
        removeNonNumbers(this.country) || "49",
        removeNonNumbers(this.city),
        removeNonNumbers(this.number),
      ]
    },
  },
}
</script>
