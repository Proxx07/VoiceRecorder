<script setup lang="ts"></script>

<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped>
button {
  padding: 1.2rem 2rem;
  font-size: 1.5rem;
  background: var(--primary-bg);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-fast);
  &:hover {
    background: var(--primary-color);
    color: var(--primary-bg);
  }
}
</style>
