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
          Nous organisons des événements à Montpellier, où vous pourrez découvrir et pratiquer cette discipline fascinante.
          Retrouvez-nous tous les mardi soir à Tropisme !
      actions:
          - label: Restez informé sur notre instagram !
            altText: ''
            url: https://www.instagram.com/longride_mtp/
            showIcon: true
            icon: instagram
            iconPosition: right
            style: secondary
            elementId: ''
            type: Button
      media:
          url: /images/merti-flammingo.jpg
          altText: Merti en flammand rose
          elementId: ''
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
    - subtitle: Ces sponsors nous on fait confiance, pourquoi pas vous !
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
          text: Sessions initiations dancing
          color: text-dark
          styles:
              self:
                  textAlign: center
          type: TitleBlock
      subtitle: Tous les mardi soirs de 18h à 19h à la Halle Tropisme
      text: |-
          Participez à une session initiation au longboard dancing (prix 5€) :
          [lien de l'event](https://www.tropisme.coop/agenda/atelier-longboard-dancing-freestyle)

          Tu veux découvrir le longboard ?
          Viens t’initier à cette discipline géniale : Longboard Dancing & Freestyle !

          Peu importe ton niveau :
          Que tu sois débutant·e ou déjà un pro de la ride, à partir de 16 ans, que tu sois vert, rouge, bleu, il, elle, iel... Tout le monde est bienvenu !

          On t'accueille tous les mardis :

          18h - 19h : Session sur inscription   (places limitées)

          19h - 20h : Session gratuite et ouverte à tous

          Tu hésites encore ?
          Pas de panique ! Si tu n’as jamais mis un pied sur une planche ou si tu n’as pas de matériel ce n'est pas une excuse. On a tout ce qu'il te faut pour découvrir le longboard en toute sécurité  et avec un maximum de fun !

          Après la session, on se retrouve pour partager un verre pour ceux qui le souhaitent !

          Que la ride soit avec toi !
      media:
          title: Title of the video
          url: /images/tropisme.jpg
          controls: false
          aspectRatio: '16:9'
          styles:
              self:
                  padding:
                      - pt-2
                      - pb-2
                      - pl-2
                      - pr-2
                  borderColor: border-dark
                  borderStyle: solid
                  borderWidth: 1
                  borderRadius: large
          type: ImageBlock
      colors: bg-light-fg-dark
      styles:
          self:
              flexDirection: col
              justifyContent: center
          subtitle:
              textAlign: center
      type: GenericSection
seo:
    metaTitle: Longride
    metaDescription: Longride MTP - Vive la ride
    socialImage: /images/longride.jpg
    type: Seo
type: PageLayout
---
