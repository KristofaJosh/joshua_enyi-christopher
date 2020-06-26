const jwt = require('jsonwebtoken');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
} = require('graphql');
const {ProjectType, AuthType} = require("./types");
const {DescriptionInputType, RepositoryInputType, ResourcesInputType, WebsiteInputType} = require("./inputTypes");

const Authentication = {username: process.env.AUTH_USERNAME, password: process.env.AUTH_PASSWORD};

const Project = require('../model/model');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        login: {
            type: AuthType,
            args: {username: {type: GraphQLString}, password: {type: GraphQLString}},
            resolve(parent, args) {
                if (Authentication.username === args.username && Authentication.password === args.password) {
                    // create jwt
                    let token = jwt.sign({username: "Chris Josh"}, process.env.SECRET_KEY, {expiresIn: 300});
                    return {state: true, token: token, message: "success"}
                } else {
                    return {state: false, message: 'No user found!', token: ""}
                }
            }
        },
        project: {
            type: ProjectType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        },
        allProjects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find({});
            }
        },
        recentProjects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addProject: {
            type: ProjectType,
            args: {
                name: {type: GraphQLString},
                description: {type: new GraphQLNonNull(DescriptionInputType)},
                tools: {type: GraphQLList(GraphQLString)},
                website: {type: GraphQLNonNull(WebsiteInputType)},
                repository: {type: RepositoryInputType},
                resources: {type: new GraphQLList(ResourcesInputType)},
                completed: {type: GraphQLBoolean},
                category: {type: GraphQLString},
            },
            resolve: async (parent, args, req, context) =>  {
                
                if (!req.isAuth.state) {
                    
                    throw new Error(req.isAuth.message);
                }
                
                let job = new Project({
                    name: args.name,
                    description: args.description,
                    tools: args.tools,
                    website: args.website,
                    repository: args.repository,
                    resources: args.resources,
                    category: args.category,
                    completed: args.completed,
                });
                return await job.save();
            }
        }
    }),
    
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});


// mutation{
//     addProject(
//         name:"Project4",
//         description:{short:"short", long:"long"},
//     tools:["react, ts"],
//         website:{url:"url", snapshot:"snapshot"},
//     repository:{domain:"domain", url:"url"},
//     resources: [{describe:"d", link:"l", tag:"t"}, {describe:"d2", link:"l2", tag:"t4"},]
//     completed: true
//     category: ""
// ){
//         id
//         name
//         completed
//         tools
//         resources{
//             describe
//         }
//     }
// }

// mutation (
//     $name: String,
//     $description: DescriptionInputType!,
//     $tools: [String!]!,
//     $website: WebsiteInputType!,
//     $repository: RepositoryInputType,
//     $resources: [ResourcesInputType],
//     $completed: Boolean!,
//     $category: String) {
//     addProject(name: $name, description: $description, tools: $tools, website: $website, repository: $repository, resources: $resources, completed: $completed, category: $category) {
//         id
//         name
//         completed
//         tools
//         resources {
//             describe
//         }
//     }
// }
