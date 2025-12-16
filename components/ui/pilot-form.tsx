"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, Link as LinkIcon, Users, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface PilotFormProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  type: string;
  links: string;
  audience: string;
  interest: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLinksChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAudienceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInterestChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InfoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        'flex h-12 flex-1 items-center justify-start gap-3 rounded-xl bg-background px-4 text-left font-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
);

InfoButton.displayName = 'InfoButton';

export const PilotForm = React.forwardRef<HTMLDivElement, PilotFormProps>(
  (
    {
      className,
      name,
      email,
      type,
      links,
      audience,
      interest,
      onNameChange,
      onEmailChange,
      onTypeChange,
      onLinksChange,
      onAudienceChange,
      onInterestChange,
      onSubmit,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          'w-full max-w-2xl space-y-6 rounded-2xl bg-card p-6 shadow-lg',
          className
        )}
        {...props}
      >
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="name" className="font-medium text-card-foreground">
              Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                value={name}
                onChange={onNameChange}
                placeholder="Your name"
                className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Email Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="email" className="font-medium text-card-foreground">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="your@email.com"
                className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Type Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="type" className="font-medium text-card-foreground">
              Type of creator / organization
            </Label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="type"
                type="text"
                value={type}
                onChange={onTypeChange}
                placeholder="e.g. Podcaster, Musician, Newsletter"
                className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="links" className="font-medium text-card-foreground">
              Links to your main content (podcast / newsletter / media site / music)
            </Label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Textarea
                id="links"
                value={links}
                onChange={onLinksChange}
                placeholder="https://..."
                rows={3}
                className="w-full min-h-[80px] rounded-xl border border-input bg-transparent pl-10 pr-4 py-3 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Audience Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="audience" className="font-medium text-card-foreground">
              Rough audience size
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="audience"
                type="text"
                value={audience}
                onChange={onAudienceChange}
                placeholder="e.g. 10k subscribers"
                className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Interest Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="interest" className="font-medium text-card-foreground">
              Why you're interested in Fridge Channel
            </Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Textarea
                id="interest"
                value={interest}
                onChange={onInterestChange}
                placeholder="Tell us what excites you..."
                rows={4}
                className="w-full min-h-[100px] rounded-xl border border-input bg-transparent pl-10 pr-4 py-3 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="h-12 w-full rounded-xl text-base font-bold"
              asChild
            >
              <motion.button whileTap={{ scale: 0.98 }}>
                Apply for Early Access
              </motion.button>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    );
  }
);

PilotForm.displayName = 'PilotForm';

