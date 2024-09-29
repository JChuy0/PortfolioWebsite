import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getAllRepos() {
    const url = "https://api.github.com/users/JChuy0/repos?";
    const searchParams = new URLSearchParams({
      sort: 'created',
      direction: 'desc',
    });

    interface Dictionary { [key: string]: string; }
    let projects: Dictionary[] = [];

    try {
      const response = await fetch(url + searchParams);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      json.forEach((ele: { name: string; description: string; topics: string; }) => {
        let project: Dictionary = {};

        project["name"] = ele.name;
        project["description"] = ele.description;
        project["topics"] = ele.topics;

        projects.push(project);
      });

    } catch (err) {
      console.error(err);
    }

    return projects;
  }

  // returns project repo and readme
  // returns error if repo doesn't exist
  async getSingleRepo(repo_name: string) {
    const project_name = repo_name;
    const project_url = `https://api.github.com/repos/jchuy0/${project_name}`;
    const project_readme_url = `https://api.github.com/repos/jchuy0/${project_name}/contents/README.md`;

    interface Dictionary { [key: string]: string; }
    let project: Dictionary = {};

    try {
      if (repo_name != null) {
        // get project repository and readme
        const project_url_response = await fetch(project_url);
        const project_readme_response = await fetch(project_readme_url);
        const project_json = await project_url_response.json();
        const readme_json = await project_readme_response.json();

        if (!project_url_response.ok) {
          throw new Error(`Response status: ${project_url_response.status}, Status Text: ${project_url_response.statusText}, project '${project_name}' does not exist`);
        } else {
          // decodes a base64 string
          let readme = atob(readme_json.content);

          project['project_repo'] = project_json;
          project['project_readme'] = readme;
        }

      }
    } catch (err) {
      console.error(err)
    }

    return project;
  }
}