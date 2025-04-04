---
title: Home
slug: /
sections:
    - type: GenericSection
      title:
          text: LONGRIDE
          type: TitleBlock
          styles:
              self:
                  fontWeight: '500'
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
            type: Button
      media:
          url: /images/merti-flammingo.jpg
          altText: Merti en flammand rose
          type: ImageBlock
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
          type: TitleBlock
      subtitle: Tous les mardi soirs à partir de 18h à la Halle Tropisme
      text: |-
          Que vous n'ayez jamais mis les pieds sur une board ou que vous soyer un pro, venez roulez avec nous à couvert à la Halle Tropisme !

          18h - 19h : Initiation dancing ([sur inscription](https://www.helloasso.com/associations/association-de-longboard-longride-montpellier))

          19h - 20h : Session ouverte à tous les adhérents
      actions:
          - label: Plus d'informations
            url: /session-mardi
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
      styles:
          self:
              alignItems: center
              flexDirection: row-reverse
      media:
          url: /images/tropisme-mini.jpg
          altText: Riders à la Halle Tropisme
          type: ImageBlock
      type: GenericSection
    - title: Divider
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
          type: TitleBlock
      subtitle: Un dimanche par mois
      text: |-
          Nous allons parfois tous ensemble à la [pumptrack de Gramont](https://maps.app.goo.gl/jjviKR6HBeVioThm7).

          Suis notre agenda sur instagram pour connaître les prochaines dates,
          et n'hésite pas à nous envoyer un DM si tu veux covoiturer avec nous !
      actions:
          - label: Plus d'informations
            url: /session-pumptrack
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
      media:
          url: /images/pumptrack-mini.jpg
          altText: Pumptrack
          type: ImageBlock
      type: GenericSection
    - title: Divider
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
          type: TitleBlock
      subtitle: Un dimanche par mois
      text: |-
          Un tour de Montpellier en longboard, ça te dit ?

          Suis notre agenda sur instagram pour connaître les prochaines dates !
      actions:
          - label: Plus d'informations
            url: /session-cruising
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
      styles:
          self:
              alignItems: center
              flexDirection: row-reverse
      media:
          url: /images/cruising-mini.jpg
          altText: Cruising
          type: ImageBlock
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
          - url: /images/petits-debrouillards.png
            altText: Les petits débrouillards
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
          type: TitleBlock
      showThumbnail: true
      showDate: true
      variant: three-col-grid
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
