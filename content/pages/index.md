---
title: Home
slug: /
sections:
    - type: GenericSection
      title:
          text: LONGRIDE
          color: text-dark
          type: TitleBlock
      subtitle: Association de longboard dancing & freestyle sur Montpellier
      text: >
          Nous sommes une association passionnée de longboard dancing & freestyle.
          Nous organisons des événements à Montpellier, où vous pourrez découvrir et
          pratiquer cette discipline fascinante. Retrouvez-nous tous les mardi soir
          à Tropisme !
      actions:
          - label: Restez informé sur notre instagram !
            url: 'https://www.instagram.com/longride_mtp/'
            showIcon: true
            icon: instagram
            iconPosition: right
            style: secondary
            elementId: ''
            type: Button
      media:
          url: /images/merti-flammingo.jpg
          altText: Merti en flammand rose
          type: ImageBlock
      elementId: ''
      colors: bg-light-fg-dark
      styles:
          self:
              alignItems: center
              flexDirection: row
              padding:
                  - pt-16
                  - pl-16
                  - pb-20
                  - pr-16
    - title: Divider
      colors: bg-light-fg-dark
      styles:
          self:
              padding:
                  - pt-7
                  - pl-7
                  - pb-7
                  - pr-7
      type: DividerSection
    - title:
          text: Session du mardi
          color: text-dark
          type: TitleBlock
      subtitle: Tous les mardi soirs à partir de 18h à la Halle Tropisme
      text: |-
          18h - 19h : Session sur inscription   (places limitées)
          19h - 20h : Session ouverte à tous les adhérents
      actions:
          - label: Plus d'informations
            url: /session-mardi
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
            type: Button
      styles:
          self:
              alignItems: center
              flexDirection: row-reverse
      media:
          url: /images/tropisme-mini.jpg
          altText: Riders à la Halle Tropisme
          type: ImageBlock
      colors: bg-light-fg-dark
      type: GenericSection
    - title: Divider
      colors: bg-light-fg-dark
      styles:
          self:
              padding:
                  - pt-7
                  - pl-7
                  - pb-7
                  - pr-7
      type: DividerSection
    - title:
          text: Session pumtrack
          color: text-dark
          type: TitleBlock
      subtitle: WIP
      text: |-
          WIP
      actions:
          - label: Plus d'informations
            url: /session-pumptrack
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
            type: Button
      media:
          url: /images/pumptrack-mini.jpg
          altText: Pumptrack
          type: ImageBlock
      colors: bg-light-fg-dark
      type: GenericSection
    - title: Divider
      colors: bg-light-fg-dark
      styles:
          self:
              padding:
                  - pt-7
                  - pl-7
                  - pb-7
                  - pr-7
      type: DividerSection
    - title:
          text: Session cruising
          color: text-dark
          type: TitleBlock
      subtitle: WIP
      text: |-
          WIP
      actions:
          - label: Plus d'informations
            url: /session-cruising
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            elementId: ''
            type: Button
      styles:
          self:
              alignItems: center
              flexDirection: row-reverse
      media:
          url: /images/cruising-mini.jpg
          altText: Cruising
          type: ImageBlock
      colors: bg-light-fg-dark
      type: GenericSection
    - subtitle: 'Ces sponsors nous on fait confiance, pourquoi pas vous !'
      images:
          - url: /images/tropisme.png
            altText: Tropisme logo
            type: ImageBlock
          - url: /images/allo-les-tacos-logo.png
            altText: Allo Les Tacos logo
            type: ImageBlock
          - url: /images/mtpsurlacarte.jpg
            altText: MTP sur la carte logo
            type: ImageBlock
      motion: move-to-left
      colors: bg-neutral-fg-dark
      styles:
          self:
              justifyContent: center
          subtitle:
              textAlign: center
      type: ImageGallerySection
    - posts:
          - content/pages/event/sms-2024.md
          - content/pages/event/spooky-ride-2024.md
      title:
          text: Nos derniers événements
          color: text-dark
          type: TitleBlock
      showThumbnail: true
      showDate: true
      variant: three-col-grid
      colors: bg-light-fg-dark
      styles:
          self:
              padding:
                  - pt-16
                  - pl-16
                  - pb-16
                  - pr-16
              justifyContent: center
      type: FeaturedPostsSection
      hoverEffect: move-up
seo:
    metaTitle: Longride
    metaDescription: Longride MTP - Vive la ride
    socialImage: /images/longride.jpg
    type: Seo
type: PageLayout
---
