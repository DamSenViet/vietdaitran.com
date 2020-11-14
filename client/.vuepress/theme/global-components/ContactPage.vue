<template>
  <form class="contact" @submit.prevent>
    <input
      class="name"
      type="text"
      v-model="name"
      placeholder="Name..."
      required
    />
    <input
      class="email"
      type="email"
      v-model="email"
      placeholder="Email..."
      required
    />
    <input
      class="subject"
      type="text"
      v-model="subject"
      placeholder="Subject..."
      required
    />
    <textarea class="text" v-model="text" placeholder="Text..." required>
    </textarea>
    <button class="submit" @click="submit">
      <span>Submit</span>
      <SendIcon v-if="status === READY" />
      <LoaderIcon class="loader" v-else-if="status === SENDING" />
      <CheckIcon v-else-if="status === DONE" />
      <XIcon v-else-if="status === FAILED" />
    </button>
  </form>
</template>


<script>
import origin from "./../api/origin";
import { debounce } from "lodash";
import { SendIcon, LoaderIcon, CheckIcon, XIcon } from "vue-feather-icons";

const debouncedSendMail = debounce(origin.sendMail, 1000);

const READY = 0;
const SENDING = 1;
const DONE = 2;
const FAILED = 3;

export default {
  name: "ContactPage",

  components: {
    SendIcon,
    CheckIcon,
    LoaderIcon,
    XIcon,
  },

  data() {
    return {
      email: "",
      name: "",
      subject: "",
      text: "",
      status: READY,
      READY,
      SENDING,
      DONE,
      FAILED,
    };
  },

  methods: {
    async submit() {
      const { email, name, subject, text, status } = this;
      if (status === DONE) return;
      if (!email || !name || !subject || !text) return;

      try {
        this.status = SENDING;
        await debouncedSendMail(email, name, subject, text);
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        this.status = DONE;
      } catch {
        this.status = FAILED;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/colors';
@import './../styles/interactions';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.contact {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
  margin-top: 3rem;

  > input, textarea {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    outline: none;
    border: 1px solid $colors-text;
  }

  > .text {
    resize: vertical;
    min-height: 200px;
    font-family: inherit;
  }

  > .submit {
    justify-self: start;
    position: relative;
    top: 0;
    left: 0;
    display: grid;
    padding: 6px 10px;
    grid-template-columns: auto auto;
    column-gap: 10px;
    align-items: center;
    border: 0px none transparent;
    outline: none;
    font-size: 1rem;
    background-color: transparent;
    border-reveal($colors-text, 1px, 0px, 0px);

    &:hover {
      cursor: pointer;
    }

    > svg {
      height: 2rem;

      &.loader {
        animation: spin 2s linear;
      }
    }
  }
}
</style>