<template>
  <div>
    <!-- Phone and Email can be display inline as icons only (`email.icon_only = true`) or as single line showing text -->
    <Contact-Phone
      v-if="my_phone && my_phone.number"
      :title="my_phone.title"
      :country="my_phone.country"
      :city="my_phone.city"
      :number="my_phone.number"
      :icon="my_phone.icon"
      :icon_only="phone_as_icon"
      :obfuscate="!my_phone_plaintext"
    />
    <br v-if="my_phone && my_phone.number && !phone_as_icon" />
    <Contact-Phone
      v-if="my_mobile && my_mobile.number"
      :title="my_mobile.title || 'Mobile'"
      :country="my_mobile.country"
      :city="my_mobile.city"
      :number="my_mobile.number"
      :icon="my_mobile.icon || 'mobile-alt'"
      :icon_only="mobile_as_icon"
      :obfuscate="!my_mobile_plaintext"
    />
    <br v-if="my_mobile && my_mobile.number && !mobile_as_icon" />
    <Contact-Email
      v-if="my_email && (my_email.email || my_email.name)"
      :email="my_email.email"
      :name="my_email.name"
      :domain="my_email.domain"
      :title="my_email.title"
      :icon_only="email_as_icon"
      :obfuscate="!my_email_plaintext"
    />
    <br v-if="my_email && (my_email.email || my_email.name) && !email_as_icon" />
    <Social-Facebook v-if="my_facebook" :id="my_facebook" />
    <Social-LinkedIn v-if="my_linkedin" :id="my_linkedin" />
    <Social-XING v-if="my_xing" :id="my_xing" />
    <Social-Twitter v-if="my_twitter" :id="my_twitter" />
    <Social-Mastodon v-if="my_mastodon" :url="my_mastodon" />
    <!-- caution: Mastodon gets an URL passed, not an ID -->
    <Social-Telegram v-if="my_telegram" :id="my_telegram" />
    <Social-Skype v-if="my_skype" :id="my_skype" />
    <Social-Keybase v-if="my_keybase" :id="my_keybase" />
    <Social-GitHub v-if="my_github" :id="my_github" />
    <Social-StackOverflow v-if="my_stackoverflow" :id="my_stackoverflow" />
    <Social-ResearchGate v-if="my_researchgate" :id="my_researchgate" />
    <Social-ORCID v-if="my_orcid" :id="my_orcid" />
    <Social-Nextcloud v-if="my_nextcloud" :id="my_nextcloud" />
  </div>
</template>
<script>
const attributes = {
  phone: ["country", "city", "number", "title"],
  mobile: ["country", "city", "number", "title"],
  email: ["email", "name", "domain", "title"],
  facebook: null,
  linkedin: null,
  xing: null,
  twitter: null,
  mastodon: null,
  telegram: null,
  whatsapp: null,
  skype: null,
  keybase: null,
  github: null,
  stackoverflow: null,
  researchgate: null,
  orcid: null,
  nextcloud: null,
}

export default {
  name: "Contact-Details",
  props: [
    "phone",
    "phone_as_icon",
    "mobile",
    "mobile_as_icon",
    "email",
    "email_as_icon",
    "facebook",
    "linkedin",
    "xing",
    "twitter",
    "mastodon",
    "telegram",
    "whatsapp",
    "skype",
    "keybase",
    "github",
    "stackoverflow",
    "researchgate",
    "orcid",
    "nextcloud",
  ],
  data() {
    // init the attributes with the component's parameters
    return {
      my_phone: this.phone,
      my_mobile: this.mobile,
      my_email: this.email,
      my_facebook: this.facebook,
      my_linkedin: this.linkedin,
      my_xing: this.xing,
      my_twitter: this.twitter,
      my_telegram: this.telegram,
      my_mastodon: this.mastodon,
      my_whatsapp: this.whatsapp,
      my_skype: this.skype,
      my_keybase: this.keybase,
      my_github: this.github,
      my_stackoverflow: this.stackoverflow,
      my_researchgate: this.researchgate,
      my_orcid: this.orcid,
      my_nextcloud: this.nextcloud,
    }
  },
  mounted() {
    // https://stackoverflow.com/a/57479373/1480587
    // this.$route.query.yourProperty
    this.checkAllAttributes()
  },

  methods: {
    /**
     * iterate over all attributes of all contact elements to check of passed or stored values
     */
    checkAllAttributes() {
      // first handle some special cases with aliases for URL parameters
      this.checkParamAndStorage("email", "email", "email")
      this.checkAndParsePhoneNumber("phone", "phone")
      this.checkAndParsePhoneNumber("mobile", "mobile")

      // then check all other attributes
      for (const category in attributes) {
        if (attributes.hasOwnProperty(category)) {
          const names = attributes[category]
          if (names) {
            for (const name of names) {
              this.checkParamAndStorage(category, name)
            }
          } else {
            // if no array defined, no sub-attributs are available
            this.checkParamAndStorage(category, null)
          }
        }
      }
    },

    /**
     * change data value to value from URL query parameter or the one store in local storage
     */
    checkParamAndStorage(category, name, url_param_alias) {
      // console.debug(this.$route.query)
      const key = name ? category + "." + name : category
      const paramValue = this.$route.query[url_param_alias || key]
      // console.debug(key, " = ", paramValue)
      if (paramValue) {
        // add to local storage
        localStorage.setItem(key, JSON.stringify(paramValue))
      }
      const storageValue = localStorage.getItem(key)
      // console.debug(key, " = ", storageValue)
      if (storageValue) {
        const value = JSON.parse(storageValue)
        // stored or passed value found, use this!
        const my_category = "my_" + category
        if (!this[my_category]) {
          this[my_category] = {}
        }
        if (name) {
          this.$set(this[my_category], name, value)
        } else {
          this[my_category] = value
        }

        // and now turn off obfuscation if using value from URL or localStorage
        this[my_category + "_plaintext"] = true
      }
    },

    checkAndParsePhoneNumber(url_param_alias, category) {
      const paramValue = this.$route.query[url_param_alias]
      // console.debug(url_param_alias, " = ", paramValue)
      if (paramValue) {
        // parse phone number into "country", "city", "number"
        // pattern: +country-city-number-ext
        let country, city, number
        const match = paramValue.match(/^(?:\+(\d+)-)?(?:(\d+)-)?(.*)/)
        if (match) {
          country = match[1]
          city = match[2]
          number = match[3]
        } else {
          // pattern does not match, just set number
          number = paramValue
        }
        // add to local storage
        if (!country) country = null
        if (!city) city = null
        if (!number) number = null
        localStorage.setItem(category + ".country", JSON.stringify(country))
        localStorage.setItem(category + ".city", JSON.stringify(city))
        localStorage.setItem(category + ".number", JSON.stringify(number))
      }
    },
  },

  watch: {
    // https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
    $route(to, from) {
      // react to route changes...
      // console.info("route changed from ", from, " to ", to)
      this.checkAllAttributes()
    },
  },
}
</script>
