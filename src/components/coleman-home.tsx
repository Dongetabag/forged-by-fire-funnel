"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const photos = [
  // Pre-restoration
  { src: "/images/real/pre-restoration.jpg", alt: "The Coleman home before restoration began", chapter: "Before" },
  // Demo phase
  { src: "/images/real/interior-demo-1.jpg", alt: "Demolition: walls torn out, exposed framing", chapter: "Demo" },
  { src: "/images/real/interior-demo-2.jpg", alt: "Drywall removed to expose original studs", chapter: "Demo" },
  { src: "/images/real/interior-demo-3.jpg", alt: "Ceiling beams exposed and original brick chimney revealed", chapter: "Demo" },
  { src: "/images/real/interior-detail.jpg", alt: "Wall demolition detail during restoration", chapter: "Demo" },
  // Build phase
  { src: "/images/real/mid-restoration-1.jpg", alt: "Mid-restoration: new siding going up over the original blue", chapter: "Build" },
  { src: "/images/real/mid-restoration-2.jpg", alt: "Side view during siding replacement", chapter: "Build" },
  { src: "/images/real/mid-restoration-3.jpg", alt: "Front view mid-construction with boarded windows", chapter: "Build" },
  { src: "/images/real/mid-restoration-4.jpg", alt: "Roofing and exterior work in progress", chapter: "Build" },
  // Restored
  { src: "/images/real/restored-side-2.jpg", alt: "Side angle of the restored home", chapter: "Restored" },
  { src: "/images/real/restored-side.jpg", alt: "Side elevation, fully restored", chapter: "Restored" },
  { src: "/images/real/restored-victorian-day.jpg", alt: "Front of the restored Victorian on a clear day", chapter: "Restored" },
  { src: "/images/real/restored-victorian-front.jpg", alt: "The restored Victorian, front porch view", chapter: "Restored" },
  { src: "/images/real/restored-victorian-front-2.jpg", alt: "Porch and balcony detail on the restored home", chapter: "Restored" },
];

export default function ColemanHome() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F4]">
      <div className="container-tight">
        {/* Header + Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="pill-ember mb-5">
            <Home size={12} />
            OUR FLAGSHIP HOME
          </span>
          <h2 className="text-[30px] md:text-[44px] font-normal leading-[1.08] tracking-tight text-[#1A1A1A] mb-3">
            The Cleve &amp; Gertrude Coleman Home
          </h2>
          <p className="text-[13px] uppercase tracking-widest text-[#9B2F0A] mb-7">
            Springfield, Massachusetts
          </p>

          <div className="space-y-5 text-[16px] text-[#1A1A1A]/75 leading-relaxed">
            <p>
              This Victorian home is where Cleve and Gertrude Coleman raised
              four generations and welcomed countless others through the foster
              care system, many of whom we still consider family today.
            </p>
            <p>
              For decades, this home stood as a pillar for our family and our
              community. In many ways, it already functioned as transitional
              housing. If you needed a meal, a place to sleep, or simply
              someone to listen, this home was always open.
            </p>
            <p>
              In 2019, the home experienced a fire. In 2021, my grandmother
              passed away, and my grandfather stepped away from the property.
              In 2022, after experiencing a devastating house fire of my own, I
              made the decision to purchase the home and rebuild it.
            </p>
            <p>
              What followed was a two-and-a-half-year process of restoring not
              just a structure, but a sense of stability and purpose.
            </p>
            <p className="text-[#9B2F0A] font-medium">
              It was more than a house. It was ground zero for my grandparents&apos;
              mission: to help in a way that impacts lives, and to love in a
              way that inspires others to do the same.
            </p>
            <p className="text-[18px] text-[#1A1A1A] font-medium italic">
              Today, that legacy continues through Forged By Fire.
            </p>
          </div>
        </motion.div>

        {/* Chronological photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-3">
            TWO AND A HALF YEARS, IN PICTURES
          </p>
          <h3 className="text-[24px] md:text-[30px] font-normal tracking-tight text-[#1A1A1A] mb-2">
            From the home we knew to the home we serve from.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              className="img-card aspect-[4/5] relative group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A]/85 backdrop-blur-sm rounded-full">
                <span className="text-[9px] uppercase tracking-widest text-white font-semibold">
                  {photo.chapter}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-[12px] text-white leading-snug">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[12px] text-[#1A1A1A]/45 text-center mt-10 max-w-xl mx-auto"
        >
          Springfield, Massachusetts. 2022 to 2024. Every photo is the actual home.
        </motion.p>
      </div>
    </section>
  );
}
