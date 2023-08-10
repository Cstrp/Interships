<template>
  <div class="p-10 bg-black/20 rounded">
    <span class="text-3xl">Sign Up</span>
    <q-form
      @submit.prevent="onSubmit(url)"
      @reset="onReset"
      class="q-gutter-sm"
    >
      <q-input
        v-model="email"
        label="Email"
        lazy-rules
        color="secondary"
        :rules="[v => !!v || 'Field is required', isValidEmail]"
      />
      <q-input
        v-model="password"
        color="secondary"
        hint="(min. 6 char | max. 16 char)"
        label="Password"
        lazy-rules
        :rules="[
          v => !!v || 'Field is required',
          v => (v && v.length >= 6) || 'Password must be at least 6 characters',
          v =>
            (v && v.length <= 16) || 'Password must be at most 16 characters',
        ]"
      />

      <div class="flex flex-row gap-5 mt-10">
        <q-btn
          label="Join"
          type="submit"
          flat
          class="font-mono"
          style="text-transform: inherit"
        />
        <q-btn
          label="Reset"
          type="reset"
          flat
          class="font-mono"
          style="text-transform: inherit"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { isValidEmail } from 'src/utils/isValidEmail';
import { email, onReset, onSubmit, password } from '../utils/auth-form';

const url = '/api/v1/authentication/sign-up';
</script>
