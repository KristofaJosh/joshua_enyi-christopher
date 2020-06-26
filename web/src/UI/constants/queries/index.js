import {gql} from "apollo-boost";

const allProjects = gql`
    query {
        allProjects{
            id
            name
            description{
                short
                long
            }
            tools
            website{
                url
                snapshot
            }
            repository{
                domain
                url
            }
            resources{
                describe
                link
                tag
            }
            completed
            category
            createdAt
        }
    }
`;

const login = gql`
    query ($username:String, $password: String ){
        login(username: $username, password: $password) {
            token
            state
            message
        }
    }
`;

const addProjectMutation = gql`
    mutation(
        $name: String, $description: DescriptionInputType!, $tools: [String!]!, $website: WebsiteInputType!,
        $repository: RepositoryInputType, $resources: [ResourcesInputType], $completed: Boolean!, $category: String,
    ) {
        addProject(
            name: $name, description: $description, tools: $tools, website: $website, repository: $repository,
            resources: $resources, completed: $completed, category: $category)
        {
            id
            name
            completed
        }
    }
`;

const project = gql`
    query ($id: ID!) {
        project(id: $id) {
            name
            description {
                short
                long
            }
            website {
                url
                snapshot
            }
            repository {
                url
                domain
            }
            resources {
                describe
                link
                tag
            }
            tools
            category
            completed
        }
    }
`;

const recentProjects = gql`
    query {
        recentProjects {
            id
            name
            description {
                short
            }
        }
    }

`;

const GraphQLFunctions = {
    Queries: {
        allProjects,
        login,
        project,
        recentProjects,
    },
    Mutations: {
        addProjectMutation,
    },
};

export default GraphQLFunctions;


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

//Query
// {
//     "name": "another one",
//     "description": {"short": "short description", "long": "it's the long one"},
//     "tools": ["django", "vuejs", "oracle", "java"],
//     "website": {"url": "the url", "snapshot": "snapshot"},
//     "repository": {"domain": "domain", "url": "url is here"},
//     "resources": [{"describe": "it is this", "link": "it's the link", "tag": "it is what is"},{"describe": "it is this", "link": "it's the link", "tag": "it is what is"}],
//     "completed": false,
//     "category": "react web social"
// }