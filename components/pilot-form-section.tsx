"use client";

import { useState } from 'react';
import { PilotForm } from '@/components/ui/pilot-form';

export function PilotFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [links, setLinks] = useState('');
  const [audience, setAudience] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, type, links, audience, interest });
  };

  return (
    <PilotForm
      name={name}
      email={email}
      type={type}
      links={links}
      audience={audience}
      interest={interest}
      onNameChange={(e) => setName(e.target.value)}
      onEmailChange={(e) => setEmail(e.target.value)}
      onTypeChange={(e) => setType(e.target.value)}
      onLinksChange={(e) => setLinks(e.target.value)}
      onAudienceChange={(e) => setAudience(e.target.value)}
      onInterestChange={(e) => setInterest(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
}



