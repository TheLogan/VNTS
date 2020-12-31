import { AsyncAction } from "overmind";
import Project from "../../Models/Project";

export const createProject: AsyncAction<{projectName: string, cloudHost: boolean}> = async ({ state, actions }, value) => {
  
  state.project = new Project(value.projectName);
  console.log('value', value); 
  state.isCreatingProject = false;
  if(value.cloudHost) {
    await actions.projectActions.setLoadingProject({status: true});
    await actions.projectActions.setLoadingProject({status: false});
  }
};

export const setLoadingProject: AsyncAction<{status: boolean}> = async ({ state }, value) => {
  state.isCreatingProject = true;
};


