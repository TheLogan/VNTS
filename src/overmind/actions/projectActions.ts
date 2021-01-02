import { AsyncAction } from "overmind";
import Project from "../../Models/Project";

export const createProject: AsyncAction<{ projectName: string, cloudHost: boolean }> = async ({ state, actions, effects }, value) => {
  await actions.projectActions.setLoadingProject({ status: true });
  state.project = new Project(value.projectName);
  console.log('value', value);
  state.isCreatingProject = false;
  if (value.cloudHost) {
    console.log('running await');
    await effects.projectEffects.waiting.getCurrentUser();
    console.log('done waiting');
    
    await actions.projectActions.setLoadingProject({ status: false });

  }
};

export const setLoadingProject: AsyncAction<{ status: boolean }> = async ({ state }, value) => {
  state.isCreatingProject = value.status;
};