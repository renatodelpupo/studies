const StyleDictionary = require("style-dictionary");

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: "shadow/web",
  type: "value",
  matcher: (prop) => {
    //console.log(prop);
    return prop.path.includes("shadow");
  },
  transformer: function (prop) {
    switch (prop.value) {
      case 1:
        return "0px 2px 4px rgba(113, 113, 113, 0.2)";
      case 2:
        return "0px 4px 8px rgba(113, 113, 113, 0.2)";
      case 3:
        return "0px 8px 16px rgba(113, 113, 113, 0.3)";
      case 4:
        return "0px 16px 32px rgba(0, 0, 0, 0.2)";
      default:
        throw `shadow level ${prop.value} not defined`;
    }
  },
});

// REGISTER THE CUSTOM TRANFORM GROUPS

console.log(StyleDictionary.transformGroup["scss"]);
console.log(StyleDictionary.transformGroup["js"]);

StyleDictionary.registerTransformGroup({
  name: "custom/web",
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/css",
    "shadow/web",
  ],
});

StyleDictionary.registerTransformGroup({
  name: "custom/js",
  transforms: ["attribute/cti", "size/rem", "color/hex", "name/cti/camel"],
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/config.json");

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
