{
  position: {
    height: 0,
    width: 0,
    depth: 0,
    coordinates: [
    ],
    direction: [
    ]
  },
  lifecycle: [
    {
      can_reproduce: false,
      constraints: [
        { on: "age", min: 0, max: 90 },
        { on: "size", max: 100, min: 20 }
      ],
      attributes: [
      ]
    },
    {
      can_reproduce: true,
      constraints: [
        { on: "age", min: 91, max: 180 },
        { on: "size", max: 150, min: 90 }
      ],
      attributes: [
      ]
    },
    {
      can_reproduce: false,
      constraints: [
        { on: "age", min: 181, max: 400 }
        { on: "size", max: 300, min: 90 }
      ],
      attributes: [
      ]
    }
  ],
  actions: [
    {
      effect: ["move"],
      algorithm: [
        {
          method: "forward",
          distance: 2
        }
      ]
    },
    {
      effect: ["attack"],
      algorithm: [
        {
          method: "strike",
          distance: 2,
          degree: 180,
          force: 20
        }
      ]
    },
    {
      effect: ["defend"],
      algorithm: [
        {
          method: "block",
          direction: 0,
          force: 20
        }
      ]
    },
    {
      effect: ["move", "defend"],
      algorithm: [
        {
          method: "backward",
          distance: 2
        },
        {
          method: "block",
          direction: 0,
          force: 20
        }
      ]
    },
  ],
  nutrition_profile: [
    {
      material: uuid,
      reserve: 0
    }
  ],
  nutrition_requirements: [
    {
      material: uuid,
      minimum: 0,
      maximum: 0
    }
  ],
  map: {
    locations: [
    ],
  }
}
