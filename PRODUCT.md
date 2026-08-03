# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static semantic HTML5, mobile-first CSS, and progressive vanilla JavaScript. Firebase provides the response persistence and GitHub Pages provides the public static hosting.

## Users

Mary and Everardo are the invited users. They will open a private-feeling link, read a personal request, and decide whether to accept being wedding ring sponsors.

## Product Purpose

Present a personal request for Mary and Everardo to become padrinos de anillo for a wedding in La Piedad, Michoacán, on January 23, 2027. Success means they can understand the request immediately, accept it once, and continue viewing the invitation after responding.

## Positioning

This is a single-purpose digital keepsake addressed by name to two specific people, not a general RSVP form.

## Operating Context

The experience is expected to be opened primarily on a vertically held mobile phone. It should remain readable on tablets and desktop computers and may be shared as a public GitHub Pages URL.

## Capabilities and Constraints

- Display Madrina: Mary and Padrino: Everardo on the first view.
- Identify the role as padrinos de anillo.
- Present the wedding date as 23 de enero de 2027 and the location as La Piedad, Michoacán, México.
- Offer one explicit acceptance action.
- Persist the accepted response in Firebase.
- Prevent a second accepted response at both the client experience and database rule level.
- Keep the complete page visible after a response, replacing the active form with a confirmed state.
- Store no credentials or administrative secrets in the repository. Firebase web configuration may be public, while authorization and write constraints must be enforced by Firebase Security Rules.
- The names of the couple are not provided. Copy that would require them must remain configurable and must not invent identities.

## Brand Commitments

Wedding-focused, light pastel colors, clean transitions, progressive scroll animation, strong mobile execution, and professional imagery related to the Santuario del Señor de La Piedad when licensing permits.

## Evidence on Hand

Confirmed facts are limited to the invited names, sponsorship role, date, city, requested stack, GitHub account name `JesusINF`, and Firebase account email `jesusinf2510@gmail.com`. There are no supplied logos, couple names, photographs, testimonials, or legal claims.

## Product Principles

- Make the personal request unmistakable in the first viewport.
- Treat acceptance as a meaningful, deliberate, and irreversible action.
- Keep the experience warm and ceremonial without visual clutter.
- Protect response integrity in the database, not only in browser storage.
- Preserve a fast, accessible experience on mobile networks.

## Accessibility & Inclusion

Meet WCAG AA contrast, retain browser zoom, provide keyboard and screen-reader access, maintain 44px touch targets, respect reduced-motion preferences, and avoid relying on color alone for state.
