FROM rocker/shiny-verse:4.2.0

LABEL Alexander Nielson "alexnielson@utah.gov"

# system libraries of general use
RUN apt-get update && apt-get install --no-install-recommends -y \
    pandoc \
    pandoc-citeproc \
    libcurl4-gnutls-dev \
    libcairo2-dev \
    libxt-dev \
    libssl-dev \
    libssh2-1-dev \
    libssl1.1 \
    && rm -rf /var/lib/apt/lists/*

# system library dependencies for the app. This is an example, you will need to
# modify for your app!
RUN apt-get update && apt-get install -y \
    make \
    zlib1g-dev \
    libicu-dev \
    libcurl4-openssl-dev \
    libfreetype6-dev \
    libjpeg-dev \
    libpng-dev \
    libtiff-dev \
    libfontconfig1-dev \
    libfribidi-dev \
    libharfbuzz-dev \
    && rm -rf /var/lib/apt/lists/*

# install R packages. Below is an example, you will need to modify for your app!
RUN install2.r --error \
    --deps TRUE \
    shiny \
    DT \
    bigrquery \
    data.table \
    shinycssloaders \
    shinyWidgets \ 
    thematic \ 
    bslib \ 
    ragg \
    highcharter \ 
    plotly
    

# copy the app to the image
RUN mkdir /root/app
COPY app /root/app

COPY Rprofile.site /usr/local/lib/R/etc/

EXPOSE 3838

CMD ["R", "-q", "-e", "shiny::runApp('/root/app/', port = 3838, host = '0.0.0.0')"]