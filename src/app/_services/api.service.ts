import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getAllGitHubRepos() {
    const url = "https://api.github.com/users/JChuy0/repos?";
    const searchParams = new URLSearchParams({
      sort: 'created',
      direction: 'desc',
    });

    interface Dictionary { [key: string]: string; }
    let projects: Dictionary[] = [];
    let filtered_projects: Dictionary[] = [];

    try {
      const response = await fetch(url + searchParams);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      json.forEach((ele: { name: string; description: string; topics: string; }) => {
        let project: Dictionary = {};

        // filters out certain projects
        const excludedNames = ["jchuy0", "image_board_website"];

        if (!excludedNames.includes(ele.name.toLowerCase())) {
          project["name"] = ele.name;
          project["description"] = ele.description;
          project["topics"] = ele.topics;
        }

        projects.push(project);
      });

      // filters out empty dictionaries
      filtered_projects = projects.filter(obj => Object.keys(obj).length > 0);

    } catch (err) {
      console.error(err);
    }

    return filtered_projects;
  }

  // returns an error if repo or description file don't exist
  async getSingleGitHubRepo(repo_name: string) {
    const project_name = repo_name;
    const project_url = `https://api.github.com/repos/jchuy0/${project_name}`;
    const project_description = `https://api.github.com/repos/jchuy0/${project_name}/contents/description.txt`;

    interface Dictionary { [key: string]: string; }
    let project: Dictionary = {};

    try {
      if (repo_name != null) {
        // get project repository and description
        const project_url_response = await fetch(project_url);
        const project_description_response = await fetch(project_description);
        const project_json = await project_url_response.json();
        const description_json = await project_description_response.json();
        
        if (!project_url_response.ok) {
          throw new Error(`Response status: ${project_url_response.status}, Status Text: ${project_url_response.statusText}, project '${project_name}' does not exist`);
        } else {

          let description = "";

          if (description_json.content != undefined) {
            description = atob(description_json.content);
          }

          project['project_repo'] = project_json;
          project['project_description'] = description;
        }

      }
    } catch (err) {
      console.error(err)
    }

    return project;
  }
}