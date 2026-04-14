import kitchenFlambe from "@/assets/about-resto.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          ref={textRef}
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Notre Histoire
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-snug">
            La passion de la cuisine française
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              Au 22 Bd de Berlin, 44000 Nantes, Freia vous ouvre ses portes. Ce lieu vibre de passion gastronomique, palpable dans chaque assiette. L'ambiance y est chaleureuse, authentique, invitant à la détente et au partage. Notre cuisine sublime les produits frais de saison, transformés avec amour et créativité. Chaque saveur raconte une histoire, mariant tradition et audace pour surprendre et régaler. Ici, nous cultivons le plaisir de bien manger et la convivialité. Venez découvrir Freia, où générosité et émotion se rencontrent pour une parenthèse gourmande inoubliable.
            </p>
          </div>
        </div>
        <div
          ref={imgRef}
          className={`relative transition-all duration-1000 delay-200 ${imgVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="overflow-hidden group">
            <img
              src={kitchenFlambe}
              alt="Notre cuisine"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={500}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
