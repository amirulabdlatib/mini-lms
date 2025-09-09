<script setup>
    useSeoMeta({
        title: "Dashboard",
    });

    definePageMeta({
        middleware: ["sanctum:auth"],
    });
</script>
<template>
    <div>Dashboard</div>
</template>
