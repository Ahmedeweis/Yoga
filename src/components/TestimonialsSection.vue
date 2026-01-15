<template>
  <section class="py-24 px-6 bg-[#F7F7F7]">
    <div class="container mx-auto">
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
          What Our Members Say
        </h2>
        <p class="text-gray-500">
          Real stories from our community about their journey to better health and mindfulness.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Review 1 -->
        <div class="bg-white p-12 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative group   flex flex-col">
          <!-- Quote Icon -->
          <div class="absolute top-8 right-8 text-gray-100 group-hover:text-gray-200 transition-colors">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
             </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-1.5 mb-8 text-yellow-400 text-2xl">
             <span v-for="i in 5" :key="i">★</span>
          </div>

          <h3 class="text-2xl font-bold mb-5 text-gray-800 leading-tight">Sign me up !!</h3>
          <p class="text-gray-500 leading-relaxed  relative z-10 text-base">
            "I started yoga to improve my flexibility, but I found so much more. The instructors are amazing and the community is so welcoming."
          </p>

          <div class="flex items-center gap-4 border-t border-gray-50 pt-6">
            <img src="../assets/imgs/member1.webp" alt="User" class="w-12 h-12 rounded-full ring-2 ring-white shadow-lg shrink-0" />
            <div>
              <p class="text-sm font-bold text-gray-900">Jane Doe</p>
              <p class="text-xs text-gray-500 font-medium">Designer</p>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="bg-white p-12 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative group  flex flex-col">
           <div class="absolute top-8 right-8 text-gray-100 group-hover:text-gray-200 transition-colors">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
             </svg>
          </div>

          <div class="flex gap-1.5 mb-8 text-yellow-400 text-2xl">
             <span v-for="i in 5" :key="i">★</span>
          </div>

          <h3 class="text-2xl font-bold mb-5 text-gray-800 leading-tight">Superb Results</h3>
          <p class="text-gray-500 leading-relaxed relative z-10 text-base">
            "After just a month, I feel more energetic and focused. The classes are challenging but very rewarding. Highly recommend!"
          </p>

          <div class="flex items-center gap-4 border-t border-gray-50 pt-6">
            <img src="../assets/imgs/member2.webp" alt="User" class="w-12 h-12 rounded-full ring-2 ring-white shadow-lg shrink-0" />
            <div>
              <p class="text-sm font-bold text-gray-900">John Smith</p>
              <p class="text-xs text-gray-500 font-medium">Developer</p>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="bg-white p-12 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative group   flex flex-col">
           <div class="absolute top-8 right-8 text-gray-100 group-hover:text-gray-200 transition-colors">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
             </svg>
          </div>

          <div class="flex gap-1.5 mb-8 text-yellow-400 text-2xl">
             <span v-for="i in 5" :key="i">★</span>
          </div>

          <h3 class="text-2xl font-bold mb-5 text-gray-800 leading-tight">Can't Compare</h3>
          <p class="text-gray-500 leading-relaxed relative z-10 text-base">
            "I've tried many studios, but this one is special. The atmosphere is perfect for relaxation and the teachers are top-notch."
          </p>

          <div class="flex items-center gap-4 border-t border-gray-50 pt-6">
            <img src="../assets/imgs/member3.webp" alt="User" class="w-12 h-12 rounded-full ring-2 ring-white shadow-lg shrink-0" />
            <div>
              <p class="text-sm font-bold text-gray-900">Emily White</p>
              <p class="text-xs text-gray-500 font-medium">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// TestimonialsSection Component
</script>
