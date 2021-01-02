import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const StartPage:React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      
      <Paper style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="column" justify="flex-start" alignItems="center">
              <h3>Projects</h3>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={4}>
                <h4>recent</h4>
              </Grid>
              <Grid item xs={4}>
                <h4>News</h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}