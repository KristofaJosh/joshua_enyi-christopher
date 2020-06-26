const {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull} = require("graphql");

const {GraphQLString, GraphQLObjectType,} = require('graphql');

const LoginType = new GraphQLObjectType({
    name: "Login",
    fields: () => ({
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

const AuthType = new GraphQLObjectType({
    name: "Token",
    fields: () => ({
        token: {type: GraphQLString},
        state: {type: GraphQLNonNull(GraphQLBoolean)},
        message: {type: GraphQLString}
    })
});


const DescriptionType = new GraphQLObjectType({
    name: "Description",
    fields: () => ({
        short: {type: GraphQLString},
        long: {type: GraphQLString},
    })
});

const RepositoryType = new GraphQLObjectType({
    name: "Repository",
    fields: () => ({
        domain: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

const ResourcesType = new GraphQLObjectType({
    name: "Resources",
    fields: () => ({
        describe: {type: GraphQLString},
        link: {type: GraphQLString},
        tag: {type: GraphQLString},
    })
});

const WebsiteType = new GraphQLObjectType({
    name: "Website",
    fields: () => ({
        url: {type: GraphQLString},
        snapshot: {type: GraphQLString},
    })
});


const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLNonNull(DescriptionType)},
        tools: {type: GraphQLList(GraphQLString)},
        website: {type: GraphQLNonNull(WebsiteType)},
        repository: {type: GraphQLNonNull(RepositoryType)},
        resources: {type: GraphQLList(ResourcesType)},
        completed: {type: GraphQLNonNull(GraphQLBoolean)},
        category: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        token: {type: GraphQLString}
    })
});

module.exports = {ProjectType, LoginType, AuthType};