import { IResolvers } from "graphql-tools";
import odds from "./data/odds.json";

const resolverMap: IResolvers = {
	Query: {
		helloWorld(_: void, args: void): string {
			return `👋 Hello world! 👋`;
		},
		odds: (_: void, args: void): object => {
			return odds;
		}
	}
};
export default resolverMap;
