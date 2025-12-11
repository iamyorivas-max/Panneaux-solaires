import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  power: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}