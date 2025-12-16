"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { TrendingUp, Heart, DollarSign, Zap, Palette } from "lucide-react";

export function WhyCreatorsBento() {
  return (
    <BentoGrid className="lg:grid-rows-4">
      <BentoCard
        name="Reach without fighting another algorithm"
        description="You already live on YouTube, Spotify, podcasts, Substack, X, TikTok. One feed change and your reach disappears. Fridge Channel gives you a real-life surface no algorithm controls: your fan's fridge door. Your magnet set lives there 24/7, so you have a stable, visible presence in their home — even when the apps are quiet."
        Icon={TrendingUp}
        className="lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2"
        background={
          <div className="absolute inset-0 bg-white dark:bg-white" />
        }
      />
      <BentoCard
        name="Deeper relationships, not just more views"
        description="Views are cheap. True fans are the ones who buy, stay, and tell friends. A Fridge Channel turns you into a daily ritual: a Player Magnet and a set of Content Magnets designed around you. Fans 'complete the picture' on the fridge to hear you while they cook, make coffee, or grab a snack. That's intimacy, not noise."
        Icon={Heart}
        className="lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4"
        background={
          <div className="absolute inset-0 bg-white dark:bg-white" />
        }
      />
      <BentoCard
        name="Higher revenue per true fan"
        description="You don't just want more audience. You want higher ARPU from the people who already love you. Your magnet set is a premium object your biggest fans are proud to display. Behind it, each Content Magnet can unlock free content, subscriber-only fridge editions, or special drops — giving you ongoing, fridge-native subscription income on top of the physical product."
        Icon={DollarSign}
        className="lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3"
        background={
          <div className="absolute inset-0 bg-white dark:bg-white" />
        }
      />
      <BentoCard
        name="Kitchen-native, without extra work"
        description="If this feels like 'one more channel to feed manually', it dies. Fridge Channel Studio plugs into what you already publish — podcasts, RSS, newsletters, blogs, X threads — and turns it into short, kitchen-friendly audio: daily briefs, summaries, or highlights. You can add exclusive audio if you want, but by default it's a low-effort, re-usable format."
        Icon={Zap}
        className="lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2"
        background={
          <div className="absolute inset-0 bg-white dark:bg-white" />
        }
      />
      <BentoCard
        name="Looks like art, never cringe"
        description="You've seen awkward gadgets and bad merch. Your brand can't afford to look cheap. Fridge Channel is just magnets — flat, well-designed, tailored to your visual style. No plastic brick on the door. No gimmick. Just fridge art with a secret job: quietly running your own channel in your audience's kitchen."
        Icon={Palette}
        className="lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-4"
        background={
          <div className="absolute inset-0 bg-white dark:bg-white" />
        }
      />
    </BentoGrid>
  );
}

