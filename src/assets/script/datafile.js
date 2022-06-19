/* CLASSES */
class Button {
  constructor(position, icon_name, filters, is_first) {
    this.position = position
    this.icon_name = icon_name
    this.filters = filters
    this.is_first = is_first
  }
}

class Filter {
  constructor(name, icon_name, boxes) {
    this.name = name
    this.icon_name = icon_name
    this.boxes = boxes
    this.toggled = false
  }
}

class Box {
  constructor(name) {
    this.name = name
    this.toggled = false
  }
}

class Company {
  constructor(name, sector, turnover, employees, products, country) {
    this.name = name
    this.sector = sector
    this.turnover = turnover
    this.employees = employees
    this.products = products
    this.country = country
  }
}

new Company() // otherwise IDE mad :(

/* DATA */

const f = [
  [
    new Filter('Trends Keywords0', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords1', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords2', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords3', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords4', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords5', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
  ],
  [
    new Filter('Trends Keywords6', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords7', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords8', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords9', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords10', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords11', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
  ],
  [
    new Filter('Trends Keywords12', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords13', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords14', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords15', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords16', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords17', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
  ],
  [
    new Filter('Trends Keywords18', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords19', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords20', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords21', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords22', 'key', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
    new Filter('Trends Keywords23', 'map', [new Box('flanges'), new Box('carbon steel'), new Box('stainless steel')]),
  ]
]

const b = [
  new Button("item1", "globe-africa", f[0], true),
  new Button("item2", "arrow-trend-up", f[1], false),
  new Button("item3", "battery-full", f[2], false),
  new Button("item4", "sitemap", f[3], false),
]

/* EXPORT */
export const filters_data = f
export const buttons_data = b
