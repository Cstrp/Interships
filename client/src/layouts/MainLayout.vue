<template>
  <div class="rounded shadow-lg shadow-black/40">
    <div class="flex flex-col gap-5">
      <q-tabs align="left">
        <div class="grow">
          <q-route-tab
            to="/sign-in"
            label="SIgn In"
            style="text-transform: inherit"
          />
          <q-route-tab
            to="/sign-up"
            label="SIgn Up"
            style="text-transform: inherit"
          />
        </div>

        <div class="grow h-full">
          <q-tab
            label="Profile"
            style="text-transform: inherit"
            @click="getProfile"
          />
        </div>
      </q-tabs>

      <router-view />

      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'boot/axios';
import { errorHandler } from 'src/utils/errorHandler';
import { UserProfile as Profile } from 'src/types/user-profile';

const getProfile = async () => {
  try {
    const res = await api.get<Profile>('/api/v1/user/profile');
    console.log(res);
  } catch (error) {
    errorHandler(error);
  }
};
</script>
