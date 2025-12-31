'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Profile pictures",
    desc: "Make your social media pop with clean, pro images."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
      </svg>
    ),
    title: "Product images",
    desc: "Boost sales with stunning, background-free product shots."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Real estate photos",
    desc: "Showcase properties with crisp, distraction-free images."
  }
];

const testimonials = [
  {
    name: "Sarah K.",
    text: "I saved hours editing my product photos. The results are amazing!",
    avatar: "/avatar1.jpg"
  },
  {
    name: "James L.",
    text: "Super easy to use and the background removal is flawless.",
    avatar: "/avatar2.jpg"
  },
  {
    name: "Emily R.",
    text: "Perfect for my LinkedIn profile. Highly recommend!",
    avatar: "/avatar3.jpg"
  }
];

export default function Page() {
  const router = useRouter();

  return (
    <main className="min-h-screen relative overflow-x-hidden dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Remove backgrounds in <span className="text-blue-600">seconds</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            Fast, accurate background removal built for professionals and teams.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={() => router.push("/login")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Sign up free
            </button>

            <button className="border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-lg text-sm">
              Try demo upload
            </button>

            <span className="text-sm text-gray-500 ml-2">No credit card required</span>
          </div>
        </div>

        {/* Preview Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-700 dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <Image
              src="/preview-image.jpg"
              alt="Preview"
              className="rounded-lg object-cover w-full"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Perfect for</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-700 dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="text-blue-600 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">What our users say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-700 dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-center gap-4">
                <Image src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">Customer</div>
                </div>
              </div>

              <p className="mt-4 text-gray-300">“{t.text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to remove backgrounds?</h3>
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
        >
          Get started free
        </button>
      </section>

 
     
    </main>
  );
}
