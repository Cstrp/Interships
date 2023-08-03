<template>
  <div>{{ JSON.stringify(profile) }}</div>
</template>

<script lang="ts" setup>
import { User } from 'src/types/user';

const profile = defineProps<{ user: User }>();

console.log(profile);
</script>

<style lang="scss" scoped></style>
