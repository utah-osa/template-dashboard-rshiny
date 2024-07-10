# template-dashboard-rshiny
### Author: @alexnielson

Hello, this repo is intended to be a template for building an R Shiny app deployed on Google Cloud Platform's (GCP) Cloud Run using continuous integration via Cloud Build + Docker. 

This app includes styling for the OSA's style guide, so feel free to ignore or remove that code if you are not an internal developer. 

The core pieces of the repository are:

- Dockerfile : Instructions for Docker to build your image.
- cloudbuild.yaml Instructions for Cloud Build to run your build your Docker in the cloud using the Dockerfile and instructions to deploy Cloud Run. All you have to do is build the initial cloud trigger in Cloud Build and point it to cloudbuild.yaml. Make sure to change the _DASHBOARD_NAME substitution to whatever your new dashboard name will be. 
- Rprofile.site. Assigns the shiny port and listening range
-app/
  - app.R - your shiny app.R code goes here. 
  - shiny-customized.config - very important for cloud run since it disables websocket protocol which cloud run currently does not support.



