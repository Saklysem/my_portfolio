// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import experience from "./experience";
import competition from "./competition";
import project from "./project";
import event from "./event";
import personalInfo from "./personalInfo";
import aboutProfile from "./aboutProfile";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    personalInfo,
    experience,
    competition,
    project,
    event,
    aboutProfile,
  ]),
});
