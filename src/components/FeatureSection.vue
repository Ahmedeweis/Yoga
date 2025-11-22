<template>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Left Content -->
        <div class="w-full md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-primary mb-12 leading-tight">
            Your Life For Greater<br />
            Self Of Yoga
          </h2>

          <div class="space-y-8">
            <!-- Feature 1 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-primary mb-2">Expert Instructors</h3>
                <p class="text-sm text-secondary leading-relaxed">
                  Our instructors are highly trained and experienced in various yoga disciplines to guide you.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-primary mb-2">Transformative Power</h3>
                <p class="text-sm text-secondary leading-relaxed">
                  Experience the life-changing benefits of consistent yoga practice on your mind and body.
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-primary mb-2">Welcoming Community</h3>
                <p class="text-sm text-secondary leading-relaxed">
                  Join a supportive community of like-minded individuals on the same wellness journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="w-full md:w-1/2 relative">
          <div class="relative rounded-3xl overflow-hidden h-[500px]">
            <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80" alt="Yoga Practice" class="w-full h-full object-cover" />

            <!-- Play Button Overlay -->
            <div class="absolute bottom-8 right-8">
               <button class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-primary">
                   <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// FeatureSection Component
</script>
