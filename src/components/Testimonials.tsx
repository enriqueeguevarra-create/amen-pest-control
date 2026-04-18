'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We have Cluster Flies in my back yard that have been driving us crazy when we try to sit outside to relax. Eugene came out and did an extensive spray of the back yard. By the time he left, the swarm of flies were completely gone. He called a week later to follow up, and asked if any of the flies returned. I looked outside and reported back that only a single fly could be seen (unlike the swarm of flies prior to sparing). Without hesitation, Eugene came back out the same day and sprayed the entire yard again without charge. Stellar service and they 100% stand behind their work!",
    name: 'James M.',
    location: 'Los Angeles, CA',
    initials: 'JM',
    rating: 5,
  },
  {
    quote: "I normally don't leave reviews but I just had to. I had a great experience with Jaeson. He was super professional, respectful as well understanding with my pets as I put them away carefully and safely. I would definitely recommend this company for your everyday pest treatments.",
    name: 'Beatriz H.',
    location: 'El Monte, CA',
    initials: 'BH',
    rating: 5,
  },
  {
    quote: "Eugene and Marc are friendly, responsive, and knowledgeable. I'm thankful to have seen the Amen truck pass by that day because since then they have been the ones I call to help with any pest. It's also a bonus that pricing is affordable too!",
    name: 'Tiffany M.',
    location: 'Irvine, CA',
    initials: 'TM',
    rating: 5,
  },
  {
    quote: "We've been with Amen Pest Control for about 2-1/2 years now and I can honestly say they are consistently helpful, effective and professional. Even in between sessions, they will come out and address any issues you have. When we first moved into our place in Glendora, we had a terrible ant problem but Amen took care of it and it was never an issue after that. We also saw rat droppings at some point, which for an additional fee, they took care of and we haven't seen them since. Eugene is also very kind, humble and professional & has waited for us to move our pets indoor before spraying outside. We strongly recommend this company!",
    name: 'Sireen S.',
    location: 'Upland, CA',
    initials: 'SS',
    rating: 5,
  },
  {
    quote: "Amen Pest Control Company is our service team for a 72-unit commercial property I manage. I recently had an infestation of a unit and Lonnie was kind, courteous and professional during the inspection and treatment process of several units. His patience with the senior resident of the infected unit made her feel comfortable and supported throughout the treatment plan and she has continually request him for service. He goes above and beyond to ensure that we have a pest-free community. This company has great customer service training with effective communication skills for our property. Thank you to all who service us.",
    name: 'Machara Lynn H.',
    location: 'Harbor City, CA',
    initials: 'MLH',
    rating: 5,
  },
  {
    quote: "I was very hesitant about switching from my long-term pest control company, but I'm so glad I made the change. Eugene exceeded my expectations from the start. He's incredibly honest and transparent about what's needed. Not only have I noticed a big improvement, but many residents also compliment him and the work they have done.",
    name: 'Diana M.',
    location: 'San Dimas, CA',
    initials: 'DM',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 overflow-hidden relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header and Yelp Badge Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
              Hear What Our Clients Say
            </h3>
            <p className="text-gray-600 text-lg">
              We take pride in providing top-notch pest control services. Our customers' satisfaction is our priority.
            </p>
          </div>

          {/* Yelp Badge standalone */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://www.yelp.com/biz/amen-pest-control-santa-monica-2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group flex-shrink-0 w-full md:w-auto min-w-[280px]"
          >
            <div className="flex justify-center mb-3">
              {/* Yelp logo */}
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF1A1A" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.111 18.226c-.141.969-2.119 3.407-3.029 3.731-.311.111-.594.085-.808-.107-.14-.124-2.640-3.981-2.640-3.981a1.067 1.067 0 0 1-.167-.808c.181-.695.911-.908 1.525-.624 0 0 3.592 1.786 3.747 1.859.399.178.523.545.372.93Zm-8.668 1.834c-.028 1.176-.18 3.971-.494 4.668-.211.464-.601.672-1.003.576-.37-.089-5.142-3.021-5.142-3.021-.378-.256-.468-.663-.248-1.037l2.648-3.961a1.09 1.09 0 0 1 .759-.479c.72-.093 1.204.44 1.155 1.107l-.072 1.066c-.008.121-.007.243.007.362.089.727.574 1.159 1.266 1.118.685-.041 1.146-.553 1.12-1.251l-.003-.089c-.017-.476.364-.853.84-.853.465 0 .847.372.847.836v.958Zm7.588-8.074c.226.934-.847 3.856-1.444 4.484-.298.316-.614.435-.924.314-.2-.079-3.98-2.668-3.98-2.668a1.065 1.065 0 0 1-.47-.708c-.118-.703.424-1.218 1.103-1.124l4.066.583c.443.056.594.714.649 1.119ZM9.413 9.758 7.07 7.264A1.059 1.059 0 0 1 7.143 5.8C7.579 5.39 12.65 3 13.602 3c.66 0 1.087.363 1.087 1.028v5.127c0 .278-.093.539-.261.739-.516.609-1.261.478-1.617-.159L11.8 8.177c-.061-.108-.131-.21-.21-.301a1.095 1.095 0 0 0-1.528-.169 1.07 1.07 0 0 0-.229.266c-.138.207-.371.346-.42-.215ZM6.208 9.888l4.028.848a1.062 1.062 0 0 1 .665.471c.375.618.044 1.31-.665 1.456L5.63 13.492c-.436.079-1.086-.157-1.254-1.059-.143-.761-.431-3.882.032-4.585.233-.352.583-.499.93-.399.18.05 3.598 2.034 3.598 2.034l-2.728-.595Z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">Excellent</h4>
            <div className="flex justify-center gap-1 text-[#FF1A1A] mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <Star className="h-5 w-5 stroke-current fill-none" />
            </div>
            <p className="text-gray-500 text-sm mb-3">Based on 96+ reviews on Yelp</p>
            <span className="text-[#FF1A1A] text-xs font-semibold group-hover:underline">Read our reviews →</span>
          </motion.a>
        </div>

        {/* Masonry Layout Grid for Testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 pb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`break-inside-avoid mb-8 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden ${
                index === 0
                  ? 'bg-[var(--color-primary)] text-white border-transparent'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <Quote className={`absolute top-6 right-6 h-16 w-16 ${index === 0 ? 'text-white/10' : 'text-gray-50'}`} />

              {/* 1. Customer Details */}
              <div className="flex items-center mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-inner ${
                  index === 0 ? 'bg-white text-[var(--color-primary)]' : 'bg-[var(--color-primary)] text-white'
                }`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className={`font-bold text-lg leading-tight ${index === 0 ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</p>
                  <p className={`text-sm mt-0.5 ${index === 0 ? 'text-blue-100' : 'text-gray-500'}`}>{testimonial.location}</p>
                </div>
              </div>

              {/* 2. Stars */}
              <div className="flex gap-1 text-[var(--color-accent)] mb-5 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* 3. Review Text Body */}
              <blockquote className={`leading-relaxed relative z-10 text-[15px] ${index === 0 ? 'text-white/90' : 'text-gray-700'}`}>
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
