<template>
<Contact icon="phone" :title="title || 'Phone'" :text="text" :url="url"/>
</template>
<script>
import "vue-awesome/icons/phone"
 function removeNonNumbers(phone) {
    return phone instanceof String ? phone.replace(/\D/g, "") : phone
  }
export default {
  /**
   * strip everything that is not a digit from the phone number
   */
   name: "Phone",
  props: ["country", "city", "number", "title"],
  computed: {
    text() {
      return ["+", this.country || "49", " ", this.city, " ", this.number]
    },
    url() {
      return ["tel:+", this.country || "49", removeNonNumbers(this.city), removeNonNumbers(this.number)]
    },
  },
}
</script>
