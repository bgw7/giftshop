export interface File {
    type: string;
    encoding: string;
    size: number;
    name: string;
    path: string;
    content: string;
    sha: string;
    url: string;
    git_url: string;
    html_url: string;
    download_url: string;
    _links: {
      git: string;
      self: string;
      html: string;
    }
  }

  export interface DbJsonContent {
    [key: string]: {
      sha: string;
      content: string;
    } 
  }