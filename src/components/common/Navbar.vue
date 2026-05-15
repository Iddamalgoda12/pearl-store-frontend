<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm"
  >
    <!-- Logo -->
    <RouterLink to="/" class="text-2xl font-extrabold tracking-tight text-gray-900">
      PearlStore
    </RouterLink>

    <!-- Navigation Links -->
    <div class="flex items-center gap-6 text-sm font-medium text-gray-700">
      <RouterLink to="/" class="transition hover:text-black"> Home </RouterLink>

      <RouterLink to="/products" class="transition hover:text-black"> Products </RouterLink>

      <RouterLink to="/cart" class="transition hover:text-black"> Cart </RouterLink>

      <RouterLink to="/sign-in" class="transition hover:text-black"> Sign In </RouterLink>

      <RouterLink to="/sign-up" class="transition hover:text-black">Sign Up</RouterLink>
    </div>
  </nav>
</template>
