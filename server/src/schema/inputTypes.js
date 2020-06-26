const {GraphQLString, GraphQLInputObjectType,} = require('graphql');

const DescriptionInputType = new GraphQLInputObjectType({
    name: "DescriptionInputType",
    fields: () => ({
        short:{type: GraphQLString},
        long:{type: GraphQLString},
    })
});

const RepositoryInputType = new GraphQLInputObjectType({
    name: "RepositoryInputType",
    fields: () => ({
        domain:{type: GraphQLString},
        url:{type: GraphQLString},
    })
});

const ResourcesInputType = new GraphQLInputObjectType({
    name: "ResourcesInputType",
    fields: () => ({
        describe:{type: GraphQLString},
        link:{type: GraphQLString},
        tag:{type: GraphQLString},
    })
});

const WebsiteInputType = new GraphQLInputObjectType({
    name: "WebsiteInputType",
    fields: () => ({
        url:{type: GraphQLString},
        snapshot:{type: GraphQLString},
    })
});

module.exports = {DescriptionInputType, RepositoryInputType, ResourcesInputType, WebsiteInputType};