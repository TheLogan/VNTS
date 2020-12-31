import { IConfig } from "overmind";
import { createActionsHook, createEffectsHook, createHook, createReactionHook, createStateHook } from "overmind-react";
import Project from "../Models/Project";
import * as actions from './actions';

interface iState {
  project: null | Project;
  isCreatingProject: boolean;
}

const state: iState = {
  project: null,
  isCreatingProject: false,
}

export const useOvermind = createHook<typeof config>()
export const useState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createReactionHook<typeof config>()

export const config = {
  state,
  actions,
  //effects
}

declare module 'overmind' {
  interface Config extends IConfig<{
    state: typeof config.state,
    actions: typeof config.actions,
    // effects: typeof config.effects
  }> { }
}