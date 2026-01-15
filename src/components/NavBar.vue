<template>
  <div class="absolute top-6 left-0 right-0 z-50 w-full">
    <div class="container mx-auto px-6">
      <nav class="w-full flex justify-between items-center text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 px-6 py-4">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
            <img src="../assets/imgs/logo.webp" alt="Logo" class="w-full h-full object-contain" />
          </div>
          <span class="font-display font-bold text-xl tracking-wide">Medtronic</span>
        </div>
        
        <!-- Desktop Links -->
        <ul class="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide opacity-90">
          <li><a href="#" class="hover:opacity-100 transition-opacity">Home</a></li>
          <li><a href="#" class="hover:opacity-100 transition-opacity">Classes</a></li>
          <li><a href="#" class="hover:opacity-100 transition-opacity">About</a></li>
          <li><a href="#" class="hover:opacity-100 transition-opacity">Contact</a></li>
          <li><a href="#" class="hover:opacity-100 transition-opacity">Newsletter</a></li>
        </ul>

        <!-- Desktop Auth -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" class="hover:opacity-100 transition-opacity opacity-90">Log in</a>
          <button class="flex items-center gap-2 bg-white text-[#1f2937] pl-5 pr-2 py-2 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg shadow-white/10 group">
            Sign up
            <span class="w-8 h-8 bg-[#1f2937] text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-white">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="absolute top-full left-0 right-0 mt-2 mx-6 p-6 bg-[#1f2937] rounded-3xl text-white shadow-2xl border border-white/10 md:hidden flex flex-col gap-6 animate-fade-in-down">
      <ul class="flex flex-col gap-4 text-center text-lg font-medium">
        <li><a href="#" class="block py-2 hover:text-gray-300">Home</a></li>
        <li><a href="#" class="block py-2 hover:text-gray-300">Classes</a></li>
        <li><a href="#" class="block py-2 hover:text-gray-300">About</a></li>
        <li><a href="#" class="block py-2 hover:text-gray-300">Contact</a></li>
        <li><a href="#" class="block py-2 hover:text-gray-300">Newsletter</a></li>
      </ul>
      <div class="flex flex-col items-center gap-4 border-t border-white/10 pt-6">
        <a href="#" class="font-medium hover:text-gray-300">Log in</a>
        <button class="w-full flex justify-between items-center bg-white text-[#1f2937] pl-6 pr-2 py-3 rounded-full font-bold">
          Sign up
          <span class="w-10 h-10 bg-[#1f2937] text-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
