import HeroParticipa from '@/components/HeroParticipa'
import HeaderParticipa from '../components/HeaderParticipa'
import EventsParticipa from '@/components/EventsParticipa'
import WaysPrticipa from '@/components/WaysParticipa'
import TestimonialsParticipa from '@/components/TestimonialsParticipa'
import CTAParticipa from '@/components/CTAParticipa'
import ClientLayout from '@/layout/ClientLayout'

export default function Participa() {
  return (
    <ClientLayout>
      {/* <HeaderParticipa /> */}
      <HeroParticipa />
      <EventsParticipa />
      <WaysPrticipa />
      <TestimonialsParticipa />
      <CTAParticipa />
    </ClientLayout>
  );
}
