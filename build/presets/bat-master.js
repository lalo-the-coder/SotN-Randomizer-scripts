// This is a generated file. Do not edit it directly.
// Make your changes to presets/bat-master.json then rebuild
// this file with `npm run build-presets -- bat-master`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"bat-master","name":"Bat master","description":"Soul of Bat always in first castle. Adds relic checks in Darkwing's Lair, Reverse Outer Wall, and Forbidden Library. May require limited speedrun tech to complete.","author":"asdheyb, MT_Fun","weight":0},"inherits":"casual","relicLocationsExtension":"spread","stats":false,"preventLeaks":true,"placeRelic":[{"comment":"Removes Mormegil location","location":"Mormegil","relic":[]}],"lockLocation":[{"location":"Soul of Bat","comment":"Requires Mist + at least Leap Stone","locks":["Form of Mist + Soul of Wolf","Form of Mist + Leap Stone","Form of Mist + Gravity Boots","Form of Mist + Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Fire of Bat","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Echo of Bat","comment":"Requires flight + a transformation","locks":["Soul of Bat","Gravity Boots + Leap Stone + Form of Mist","Gravity Boots + Leap Stone + Soul of Wolf","Form of Mist + Power of Mist"]},{"location":"Force of Echo","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Power of Wolf","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Skill of Wolf","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Form of Mist","comment":"Requires at least Leap Stone","locks":["Form of Mist","Leap Stone","Soul of Wolf","Gravity Boots","Soul of Bat"]},{"location":"Power of Mist","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Gas Cloud","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Gravity Boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Leap Stone","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Leap Stone","Gravity Boots","Soul of Bat","Form of Mist","Soul of Wolf"]},{"location":"Holy Symbol","comment":"Requires Jewel of Open and Merman Statue","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Bat Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"]},{"location":"Ghost Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Faerie Card","comment":"Requires gravity boots or speedrun tech","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist","Leap Stone","Soul of Wolf + Form of Mist","Soul of Wolf + Power of Wolf"]},{"location":"Demon Card","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf","Jewel of Open + Soul of Wolf + Skill of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Sword Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Heart of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Tooth of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Rib of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Ring of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Eye of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Spike Breaker","comment":"May require a divekick jump if accessed only with Leap Stone and Spike Breaker","locks":["Jewel of Open + Soul of Bat + Echo of Bat","Jewel of Open + Spike Breaker + Leap Stone","Jewel of Open + Spike Breaker + Gravity Boots + Soul of Wolf + Power of Wolf","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Gold ring","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Skill of Wolf"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker + Form of Mist","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Form of Mist + Soul of Bat"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"],"comment":"Access must also give flight","escapeRequires":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Crystal cloak","locks":["Jewel of Open"]},{"location":"Dark Blade","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Ring of Arcana","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Trio","comment":"In second castle","locks":["Holy glasses + Soul of Bat"]},{"location":"Shotel","comment":"In second castle, borrowed from the Equipment extension","locks":["Holy glasses + Soul of Bat + Form of Mist"]},{"location":"Dragon helm","comment":"In second castle, borrowed from the Equipment extension","locks":["Holy glasses + Soul of Bat"]},{"location":"Staurolite","comment":"In second castle, borrowed from the Equipment extension","locks":["Holy glasses + Soul of Bat + Form of Mist"]}],"complexityGoal":{"min":4,"max":8,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]}})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
