import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Input, InputLabel, Paper } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useActions, useState } from "../../overmind";
import './style.scss';

export const NewProject:React.FC<RouteComponentProps> = (props) => {
  const [projectName, setProjectName] = React.useState('');
  const [cloudHost, setCloudHost] = React.useState(false);

  const createProject = useActions().projectActions.createProject;
  const {project, isCreatingProject} = useState();

  React.useEffect(() => {
    if(isCreatingProject && project) {
      props.history.push('/some/path')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isCreatingProject])

  return (
    <Grid container direction="column" justify="space-between" alignItems="center" className="newProject" >
      <Grid item>
        <h3>Create new project</h3>
      </Grid>
      <Grid item>
        {/* form  */}
        <Paper className="form">
          <FormGroup row>
            <FormControl>
              <InputLabel htmlFor="my-input">Project name</InputLabel>
              <Input id="my-input" aria-describedby="Project name" value={projectName} onChange={e => setProjectName(e.target.value)} />
            </FormControl>
            <FormControlLabel
              control={<Checkbox checked={cloudHost} onChange={e => setCloudHost(e.target.checked)} name="checkedA" />}
              label="Cloud host"
            />
          </FormGroup>
          <Grid container direction="column" justify="flex-end">
            <Grid item>
              <Button disabled={isCreatingProject} onClick={() => createProject({ projectName, cloudHost })}>Create</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ Grid>
  );
}