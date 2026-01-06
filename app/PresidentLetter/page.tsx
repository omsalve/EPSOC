import Image from "next/image";
import Card from "../Components/Misc/Card";

export default function PresidentsLetter() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      
      {/* Title */}
      <h1 className="mb-20 text-center text-5xl font-light text-white">
        A Letter from our <span className="italic">Presidents</span>
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

        {/* LEFT — PRESIDENT CARDS */}
        <div className="flex flex-col gap-16">
          <PresidentCard
            name="Harsh Bhojwani"
            role="Third-year B.Sc. Economics Student at SAMSOE, NMIMS."
            image="/harsh.jpg"
          />

          <PresidentCard
            name="Ibrahim Khan"
            role="Third-year B.Sc. Economics Student at SAMSOE, NMIMS."
            image="/ibrahim.jpg"
            showButton
          />
          <PresidentCard
  name="Shambhavi Singh"
  role="Third-year B.Sc. Economics Student at SAMSOE, NMIMS."
  image="/shambhavi.jpg"
/>

        </div>


        {/* RIGHT — LETTER */}
        <Card className="p-10 text-sm leading-7 text-white/70">
          <p className="mb-6">
  The world today is fragmented and yet so predictable – billions of us,
  millions of ideas, thousands of sorrows, hundreds of joys – all on this
  one blue planet that sustains humanity inc. only because it has a layer
  of fertile topsoil and it rains sometimes.
</p>

<p className="mb-6">
  Before us, there was no such thing as ‘the world’, or ‘right’ or ‘wrong’,
  only violence. It is the human that gave birth to those concepts,
  alongside violence too, for evolution — which is nature’s skincare
  routine — deemed it appropriate (necessary) to select for a higher,
  thinking being.
</p>

<p className="mb-6">
  Arising out of this flesh machine’s predisposition to something called
  empathy — the quintessential quality of a greater being. Empathy gives
  us the ability to think beyond our own primal needs, synchronize our
  minds with the motion of distant stars, and observe shark week.
</p>

<p className="mb-6">
  But many a critical mind would ask: what have we made of this gift? To
  which we answer — well, we have made <span className="italic">The World</span>.
</p>

<p className="mb-6">
  The World is a phenomenon of our codes, our laws, and our activities.
  The World is something we construct every day with ideology and toil,
  creating in the process elaborate systems of meaning, of order, of
  justice, of other people and ourselves.
</p>

<p className="mb-6">
  But 6000 years since Sumer, and yet no ‘permanent’ definition of any of
  those things is found to be favored by history. Entire civilizations are
  left pillaged by the ravages of time. Each zenith sets into motion the
  process of its own nadir.
</p>

<p className="mb-6">
  Like the pre-eminence of gravitational laws, the only permanent fact
  about all life is that it must end. That is not to say life is
  meaningless, but that it is all that we have — and to give it meaning is
  our highest responsibility as sentient beings.
</p>

<p className="mb-6">
  Many are now waking up in a world that does not work for them — or even
  with them — where the individual is reduced merely to a trace of the
  stellar movement of the ‘world economy’.
</p>

<p className="mb-6">
  Meaning that is prevalent today is not unique; it is what the system
  thrusts upon its adherents — leaving us incapable of imagining a
  different world, a better world.
</p>

<p className="mb-6">
  The rise of institutionalism and internationalization seeks to make of
  this world a homogenous culture, the resources of our planet subsumed
  into one big market — each feeding into each other’s continual
  existence.
</p>

<p className="mb-6">
  This is a world that fails to see the difference between mediocrity and
  merit, want and need, will and ability.
</p>

<p className="mb-6">
  It is with these visions in mind that we found the motivations to create
  a space like EPSOC — a collective & a community that sees itself one with
  The World it occupies, and also its ultimate constructors.
</p>

<p className="mb-6">
  We envisioned creating a body whose ideology is rooted in compassion,
  its actions rooted in praxis — whose members realize the superiority of
  cooperation over competition.
</p>

<p className="mb-6">
  EPSOC is whatever its members want it to be. The only imposition it makes
  is the burden of creation that naturally comes with freedom.
</p>

<p className="mb-6">
  All things considered, we’re positive on that being an ‘efficient’
  tradeoff for all.
</p>

<p className="mb-10">
  So, join us in this movement — where you get to be a part of a
  free-thinking collective that is committed to unraveling meaning in
  markets and sense in systems.
</p>

<p className="text-white/90">
  — Harsh Bhojwani & Muhammad Ibrahim Khan <br />
  <span className="text-white/50">[Founding Presidents]</span>
</p>

        </Card>
      </div>
    </section>
  );
}

/* ---------------- PRESIDENT CARD ---------------- */

function PresidentCard({
  name,
  role,
  image,
  showButton = false,
}: {
  name: string;
  role: string;
  image: string;
  showButton?: boolean;
}) {
  return (
    <Card className="p-6">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className="grayscale"
        />

        {/* Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-1 text-xs text-white">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          PRESIDENT
        </div>
      </div>

      {/* Info */}
      <div className="mt-6">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/60">{role}</p>
      </div>

      {/* Button */}
      {showButton && (
        <button className="mt-6 w-full rounded-full bg-white/90 py-3 text-sm font-medium text-black hover:bg-white">
          Connect
        </button>
      )}
    </Card>
  );
}
