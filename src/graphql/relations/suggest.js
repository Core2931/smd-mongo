import { SuggestTC, UserTC } from "../../models";
import moment from "moment";
SuggestTC?.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});

SuggestTC?.addRelation("owner", {
  resolver: () => UserTC?.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.ownerName }),
  },
  projection: { ownerName: 1 },
  
  });
