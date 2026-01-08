"use client";

import React from 'react';
import Image from 'next/image';

type ComponentProps = React.HTMLAttributes<HTMLDivElement>;

// Using mockData; dev team will replace with real API hook useFetchGalleryImages()
const mockGalleryImages = [
  '/display1.png',
  '/display2.png',
  '/display3.png',
  '/dis4.png',
  '/dis5.png',
  '/dis6.png',
  '/dis7.png',
  '/dis8.png',
  '/dis9.png',
];

const ImageMask = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      <svg className='clipppy absolute -top-[999px] -left-[999px] w-0 h-0'>
        <defs>
          <clipPath id='clip-pattern' clipPathUnits={'objectBoundingBox'}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.71161 0H0V1H0.0362048C0.236734 1 0.42296 0.940031 0.577199 0.837408H0.74407V0.718826H0.888889V0.5H1V0.0562347V0H0.71161Z'
              fill='#D9D9D9'
            />
          </clipPath>
          <clipPath id='clip-pattern1' clipPathUnits={'objectBoundingBox'}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.00124689 0H1V0.665217V0.88913V0.890217C1 0.950849 0.943617 1 0.874065 1C0.804513 1 0.74813 0.950849 0.74813 0.890217V0.890761C0.74813 0.951092 0.692026 1 0.622818 1C0.559929 1 0.50786 0.959615 0.498877 0.906971C0.490714 0.959506 0.439061 1 0.376559 1C0.311952 1 0.258938 0.956733 0.253565 0.901625C0.246444 0.956975 0.192577 1 0.127182 1C0.0569414 1 0 0.950362 0 0.88913V0.666304C0 0.661014 0.00042501 0.655811 0.00124689 0.650718V0Z'
              fill='#D9D9D9'
            />
          </clipPath>
          <clipPath id='clip-pattern2' clipPathUnits={'objectBoundingBox'}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.827825 0.233206C0.928457 0.262983 1 0.338976 1 0.428023V0.964491C1 0.984102 0.979649 1 0.954545 1H0.0454546C0.0203507 1 0 0.984102 0 0.964491V0.428023C0 0.338976 0.0715426 0.262983 0.172175 0.233206C0.187663 0.102409 0.328522 0 0.5 0C0.671478 0 0.812337 0.102409 0.827825 0.233206Z'
              fill='#D9D9D9'
            />
          </clipPath>
          <clipPath id='clip-pattern6' clipPathUnits={'objectBoundingBox'}>
            <path
              d='M0 1H0.152466C0.185351 0.960002 0.327354 0.884713 0.505232 0.884713C0.683109 0.884713 0.818635 0.968237 0.849028 1H1V0.347104C0.985052 0.222406 0.838565 0.00477544 0.497758 6.98837e-05C0.156951 -0.00463567 0.0239163 0.229466 0 0.347104V1Z'
              fill='#D9D9D9'
            />
          </clipPath>
          <clipPath id='clip-pattern7' clipPathUnits={'objectBoundingBox'}>
            <path
              d='M0 0.578143V0H0.298507C0.725373 0.027027 0.958209 0.27027 1 0.518214V1H0.147761V0.694477H0.061194V0.578143H0Z'
              fill='#D9D9D9'
            />
          </clipPath>
          <clipPath id='clip-pattern8' clipPathUnits={'objectBoundingBox'}>
            <path
              d='M1 1H0V0.365648C0.0111437 0.322987 0.0446555 0.306894 0.110945 0.298564C0 0.231481 0.0794603 0.107906 0.22039 0.166751C0.157421 0.0690679 0.296852 -0.0156706 0.398801 0.0855445C0.407796 -0.0215584 0.578711 -0.0356796 0.604198 0.0867166C0.673163 -0.00154936 0.836582 0.0502345 0.782609 0.163217C0.890555 0.113787 1.01499 0.220886 0.887556 0.302092C0.957241 0.303259 0.983419 0.319478 1 0.365648V1Z'
              fill='#D9D9D9'
            />
          </clipPath>
        </defs>
      </svg>

      <section className='grid grid-cols-3 gap-8 dark:bg-black bg-white border rounded-lg p-5'>
        <figure style={{ clipPath: 'url(#clip-pattern)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[0]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
        <figure style={{ clipPath: 'url(#clip-pattern1)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[1]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
        <figure style={{ clipPath: 'url(#clip-pattern2)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[2]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
        <figure style={{ clipPath: 'url(#clip-pattern6)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[6]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
        <figure style={{ clipPath: 'url(#clip-pattern7)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[7]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
        <figure style={{ clipPath: 'url(#clip-pattern8)' }} className='overflow-hidden'>
          <Image
            src={mockGalleryImages[8]}
            alt=''
            width={400}
            height={500}
            className='transition-all duration-300 aspect-[4/5] min-h-full align-bottom object-cover hover:scale-110 w-full'
          />
        </figure>
      </section>
    </div>
  )
);

ImageMask.displayName = 'ImageMask';

export { ImageMask };

