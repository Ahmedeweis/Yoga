<template>
  <footer class="bg-[#141414] text-white pt-20 pb-10 px-6 relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute top-0 left-0 w-full h-3/4 z-0 opacity-30 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80" alt="Footer Background" class="w-full h-full object-cover object-top" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]"></div>
    </div>

    <div class="container mx-auto relative z-10">

      <!-- Top Section: Heading and CTA -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-6">
            <span class="font-display font-bold text-xl tracking-wide">More Power Efficiency</span>
          </div>
          <h2 class="font-display text-4xl md:text-5xl font-bold leading-tight">
            Your Life For Greater<br />
            Self Of Yoga
          </h2>
        </div>

        <div class="mb-2">
          <button class="bg-white text-[#1f2937] pl-6 pr-2 py-2 rounded-full font-medium flex items-center gap-3 hover:bg-gray-100 transition-colors group">
            Start Doing Today
            <span class="w-8 h-8 bg-[#1f2937] text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Middle Section: Newsletter and Links -->
      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-16 border-t border-white/10 pt-12">
        <!-- Left: Newsletter & Socials -->
        <div class="w-full lg:w-1/2">
          <p class="text-sm opacity-70 mb-4">Subscribe to stay updated</p>
          <div class="flex items-center bg-white rounded-full p-1 pl-4 max-w-xs mb-8">
            <input type="email" placeholder="Enter your email" class="bg-transparent border-none outline-none text-sm w-full text-gray-800 placeholder-gray-400" />
            <button class="w-10 h-10 bg-[#1f2937] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1f2937] transition-all">
              <span class="sr-only">Facebook</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1f2937] transition-all">
              <span class="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1f2937] transition-all">
              <span class="sr-only">Instagram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-7.846a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="flex flex-wrap gap-6 md:gap-12 w-full lg:w-1/2">
          <!-- Contacts -->
          <div class="w-1/3">
            <h4 class="font-bold mb-6">Contacts</h4>
            <ul class="space-y-4 text-sm opacity-70">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>250 Hawtown, New York</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+9158 8584 9857</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>hello@seative.digital</span>
              </li>
            </ul>
          </div>
          <!-- Services -->
          <div class="w-1/3">
            <h4 class="font-bold mb-6">Services</h4>
            <ul class="space-y-4 text-sm opacity-70">
              <li><a href="#" class="hover:text-white transition-colors">Meditation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Mind Bloom</a></li>
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <!-- Explore -->
          <div class="w-1/3">
            <h4 class="font-bold mb-6">Explore</h4>
            <ul class="space-y-4 text-sm opacity-70">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Site map</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
        <p>&copy; 2025 ZenFlow Yoga Studio. All rights reserved.</p>
        <div class="flex gap-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
          <a href="#" class="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// FooterSection Component
</script>
