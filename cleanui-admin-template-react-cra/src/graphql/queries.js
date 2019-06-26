// eslint-disable
// this is an auto generated file. This will be overwritten

export const getIntro = `query GetIntro($id: ID!) {
  getIntro(id: $id) {
    id
    content
  }
}
`;
export const listIntros = `query ListIntros(
  $filter: ModelIntroFilterInput
  $limit: Int
  $nextToken: String
) {
  listIntros(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getReference = `query GetReference($id: ID!) {
  getReference(id: $id) {
    id
    content
    author_name
    author_position
    author_company
  }
}
`;
export const listReferences = `query ListReferences(
  $filter: ModelReferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      author_name
      author_position
      author_company
    }
    nextToken
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    content
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getExperience = `query GetExperience($id: ID!) {
  getExperience(id: $id) {
    id
    position
    date
    company
    link
  }
}
`;
export const listExperiences = `query ListExperiences(
  $filter: ModelExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      position
      date
      company
      link
    }
    nextToken
  }
}
`;
export const getLeadership = `query GetLeadership($id: ID!) {
  getLeadership(id: $id) {
    id
    position
    date
    company
    link
  }
}
`;
export const listLeaderships = `query ListLeaderships(
  $filter: ModelLeadershipFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeaderships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      position
      date
      company
      link
    }
    nextToken
  }
}
`;
export const getCoursework = `query GetCoursework($id: ID!) {
  getCoursework(id: $id) {
    id
    title
  }
}
`;
export const listCourseworks = `query ListCourseworks(
  $filter: ModelCourseworkFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const getOther = `query GetOther($id: ID!) {
  getOther(id: $id) {
    id
    title
    date
    beneficiary
    link
  }
}
`;
export const listOthers = `query ListOthers(
  $filter: ModelOtherFilterInput
  $limit: Int
  $nextToken: String
) {
  listOthers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      date
      beneficiary
      link
    }
    nextToken
  }
}
`;
export const getEmail = `query GetEmail($id: ID!) {
  getEmail(id: $id) {
    id
    email
  }
}
`;
export const listEmails = `query ListEmails(
  $filter: ModelEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
    }
    nextToken
  }
}
`;
export const getArticle = `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    title
    caption
    link
  }
}
`;
export const listArticles = `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      caption
      link
    }
    nextToken
  }
}
`;
