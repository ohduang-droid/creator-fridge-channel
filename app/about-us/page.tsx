import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Story</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Why we built Fridge Channel */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Why we built Fridge Channel (and what oranges have to do with it)
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We're a data team first.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Our day job is pretty weird: we study how people actually move around their homes, and we've built what might be the world's deepest dataset about <strong className="font-semibold text-foreground">"fridge scenes"</strong> – when people open the fridge, how often, how long they linger, what else they're doing.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Almost everyone on the team also pays for a bunch of newsletters.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                And almost everyone has the same complaint:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-6 italic text-lg md:text-xl text-muted-foreground my-6">
                "I like this newsletter. I just hate watching it die in my inbox."
              </blockquote>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Funny thing is, Fridge Channel didn't start from newsletters.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-semibold">
                It started from fruit.
              </p>
            </div>
          </div>

          {/* The fruit tragedy */}
          <div className="space-y-8 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              The fruit tragedy
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                A few years ago, our office went through a "healthy era".
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Everyone started buying fruit in bulk:
              </p>
              <ul className="space-y-3 text-lg md:text-xl text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>big bags of oranges,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>boxes of berries,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>way too many bananas.</span>
                </li>
              </ul>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Where did all that fruit go?
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-semibold">
                Into a storage room.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                The same storage room that also had paper towels, cleaning supplies, random boxes…
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We didn't walk in often. We didn't see the fruit.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Weeks later, we'd do a "sad fridge clean-up" and throw away kilos of rotten oranges.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                One day someone snapped and said:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-6 italic text-lg md:text-xl text-muted-foreground my-6">
                "This is stupid. We clearly want fruit. We're just hiding it in the wrong place."
              </blockquote>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                So we tried something else.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Someone peeled a bunch of oranges, split them into segments, and put <strong className="font-semibold text-foreground">a small plate of orange slices in the middle of the big shared desk</strong>.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Nothing else changed.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-semibold">
                What happened?
              </p>
              <ul className="space-y-3 text-lg md:text-xl text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>People walked by, grabbed 2–3 slices almost without thinking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>After a few slices, someone would say, "Where are the rest of these? I want a whole orange."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>The oranges started getting eaten <strong className="font-semibold text-foreground">on time</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We stopped wasting fruit… and we kept ordering oranges every week.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The moment it clicked */}
          <div className="space-y-8 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              The moment it clicked
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                One afternoon, looking at yet another empty plate of orange slices, someone said:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-6 italic text-lg md:text-xl text-muted-foreground my-6">
                "This is literally my newsletter problem."
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <ScrollRevealCard delay={0}>
                  <Card className="border border-border/50 bg-white/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 space-y-3">
                      <p className="text-lg font-semibold text-foreground">
                        The oranges we bought
                      </p>
                      <p className="text-base text-muted-foreground">
                        = the paid newsletters we subscribe to
                      </p>
                    </CardContent>
                  </Card>
                </ScrollRevealCard>
                
                <ScrollRevealCard delay={1}>
                  <Card className="border border-border/50 bg-white/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 space-y-3">
                      <p className="text-lg font-semibold text-foreground">
                        The storage room
                      </p>
                      <p className="text-base text-muted-foreground">
                        = the email inbox
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        technically it's there, practically it's out of sight
                      </p>
                    </CardContent>
                  </Card>
                </ScrollRevealCard>
                
                <ScrollRevealCard delay={2}>
                  <Card className="border border-border/50 bg-white/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 space-y-3">
                      <p className="text-lg font-semibold text-foreground">
                        The big shared desk
                      </p>
                      <p className="text-base text-muted-foreground">
                        = the fridge door at home
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        a surface everyone actually sees, many times a day
                      </p>
                    </CardContent>
                  </Card>
                </ScrollRevealCard>
                
                <ScrollRevealCard delay={3}>
                  <Card className="border border-border/50 bg-white/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 space-y-3">
                      <p className="text-lg font-semibold text-foreground">
                        The peeled orange slices
                      </p>
                      <p className="text-base text-muted-foreground">
                        = guided, AI-shaped newsletter teasers
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        small, easy to consume, that make you want the full thing
                      </p>
                    </CardContent>
                  </Card>
                </ScrollRevealCard>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                If we could <strong className="font-semibold text-foreground">take paid issues out of the "storage room" (inbox)</strong>,
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                peel them into <strong className="font-semibold text-foreground">tiny, contextual "orange slices"</strong>,
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                and put them where people actually move every day – <strong className="font-semibold text-foreground">on the fridge</strong> –
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                maybe subscribers would finally:
              </p>
              <ul className="space-y-3 text-lg md:text-xl text-muted-foreground ml-6 my-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><em>use</em> what they already pay for,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>and naturally go back for the full issue when it matters.</span>
                </li>
              </ul>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                That was the seed of Fridge Channel.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="space-y-6 pt-12">
            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <div className="text-lg leading-relaxed py-8">
                <TextGradientScroll
                  text="Today, we combine: our fridge-scene data, our obsession with not wasting good content, and that silly orange experiment… …to help your best readers do what they already want to do: actually consume the things they pay for."
                  type="letter"
                  textOpacity="soft"
                  className="text-lg leading-relaxed max-w-3xl mx-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
              The FC magnet is just the plate on the table.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center font-semibold">
              The real magic is making sure your "oranges" don't die in the storage room.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              © Fridge Channel
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {/* <Link href="/" className="text-sm hover:underline text-muted-foreground">
                Home
              </Link>
              <Link href="/about-us" className="text-sm hover:underline text-muted-foreground">
                About us
              </Link>
              <Link href="/#how-it-works" className="text-sm hover:underline text-muted-foreground">
                How it Works
              </Link>
              <Link href="/privacy" className="text-sm hover:underline text-muted-foreground">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm hover:underline text-muted-foreground">
                Contact
              </Link> */}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

