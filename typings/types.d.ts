export type PullRequest = {
    repository_url?: string,
    html_url: string,
    id: number,
    number: number,
    title: string
    user: {
        login: string,
        avatar_url: string,
        html_url: string
    }
    labels: { name: string }[],
    state: string,
    locked: boolean,
    // comments: number,
    created_at: string,
    updated_at: string,
    closed_at: string,
    draft: boolean,
    merged_at: string | null
    // pull_request: {
    //     merged_at: string
    // },
    body: string,
    // reactions: any,
    // score: number
}

export type Item = {
    user: {
        username: string,
        name: string,
        avatar_url: string,
        html_url: string
    },
    pullRequests: PullRequest[],
    points: number
}

export type Project = {
    title: string,
    techStack: string[],
    description: string,
    githubLink: string,
    deploymentLink: string,
    mentor: string,
    mentorGithubLink: string,
    mentorLinkedinLink: string,
    mentorEmail: string,
    mentorMobileNumber: number,
    mentorDiscordUsername: string
}

export type Faq = {
    icon: JSX.Element,
    title: string,
    description: string
}

export type Contributor = {
    name: string,
    email: string,
    githubLink: string,
    mobileNumber: number,
    college: string,
    username: string
}
