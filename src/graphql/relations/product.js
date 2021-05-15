import { ProductTC, UserTC } from "../../models";
import moment from "moment";
ProductTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});

ProductTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.ownerName }),
  },
  projection: { ownerName: 1 },
})
