<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import JourneySection from './components/JourneySection.vue'
import FeatureSection from './components/FeatureSection.vue'
import SustainabilitySection from './components/SustainabilitySection.vue'
import InstructorsSection from './components/InstructorsSection.vue'
import FaqSection from './components/FaqSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen font-sans antialiased bg-soft-bg text-primary">
    <NavBar />
    <HeroSection />
    <JourneySection />
    <FeatureSection />
    <SustainabilitySection />
    <InstructorsSection />
    <FaqSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
</template>
