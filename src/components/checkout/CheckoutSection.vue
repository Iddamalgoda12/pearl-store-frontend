<template>
  <section class="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div class="space-y-2">
      <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">
        <slot name="eyebrow" />
      </p>
      <h2 class="font-manrope text-2xl font-bold text-[#191C1D]">
        <slot name="title" />
      </h2>
    </div>

    <slot />
  </section>
</template>
