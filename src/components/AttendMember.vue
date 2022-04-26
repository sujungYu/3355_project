<template>
  <div>
    <h1>DATE</h1>
    <p>
      {{ this.$store.state.Calendar.year }}.{{
        this.$store.state.Calendar.month
      }}.{{ this.$store.state.Calendar.day }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
