import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Input, InputLabel, Paper } from "@material-ui/core";
import React, { useState  } from "react";
import { useActions, useState as useOverState } from "../../overmind";
import './style.scss';

export default function NewProject() {
  const [projectName, setProjectName] = useState('');
  const [cloudHost, setCloudHost] = useState(false);

  const createProject = useActions().projectActions.createProject;
  const creatingProject = useOverState().project;
  
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
              <Button disabled={false} onClick={() => createProject({ projectName, cloudHost })}>Create</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ Grid>
  );
}