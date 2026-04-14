import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Yulie Echavídre",
    date: "Février 2026",
    rating: 5,
    text: "Une fabuleuse parenthèse entre terre et mer. Des saveurs extraordinaires dans cette écrin de nature urbaine. Service attentionné et disponible.",
  },
  {
    name: "22 Secondes",
    date: "Février 2026",
    rating: 5,
    text: "L'expérience à Freia commence par un accueil chaleureux et sobre.  La gentillesse et la délicatesse du personnel de salle n'a d'égal que leur professionnalisme et leur implication.",
  },
  {
    name: "Alex Peugnet",
    date: "Décembre 2025",
    rating: 5,
    text: "Nous avons passé une très belle soirée d'anniversaire chez Freia, une aventure culinaire avec des produits locaux magnifiés dans un cadre hors du temps. On a apprécié les 5 temps avec un accord parfait entre les vins et les boissons sans alcool.",
  },
  {
    name: "Alexandra Matte-Landry",
    date: "Mars 2026",
    rating: 5,
    text: "Nous avons adoré l’expérience. La cuisine est raffinée, audacieuse et nuancée. Le service : impeccable et attentionné. L’ambiance est saisissante dès votre arrivée; une magnifique expérience à ne pas manquer à Nantes!",
  },
  {
    name: "Alisson G",
    date: "Novembre 2025",
    rating: 5,
    text: "Une très belle découverte dans un lieu original. Les plats étaient tous excellents. Nous avons particulièrement apprécié le plat autour des encornets, l’originalité du dessert Panais et la possibilité d’avoir un accord mets/boissons sans alcool.",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="border border-border p-8 w-[340px] flex-shrink-0 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
    <div className="flex gap-1 mb-3">
      {Array.from({ length: review.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <h3 className="font-heading text-lg text-foreground mb-2">{review.name}</h3>
    <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm">
      « {review.text} »
    </p>
    <div className="flex items-baseline justify-end">
      <span className="text-muted-foreground text-xs">{review.date}</span>
    </div>
  </div>
);

const ReviewsTrack = () => (
  <div className="flex gap-6">
    {reviews.map((review, i) => (
      <ReviewCard key={i} review={review} />
    ))}
  </div>
);

const ReviewsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Ce que nos clients disent de nous
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <ReviewsTrack />
          <div className="pl-6">
            <ReviewsTrack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
