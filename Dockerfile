FROM rocker/shiny-verse:4.0.0

MAINTAINER Alexander Nielson "alexnielson@utah.gov"

# system libraries of general use
RUN apt-get update && apt-get install -y \
    sudo \
    libcurl4-openssl-dev \
    # libcurl4-gnutls-dev \
    libcairo2-dev \
    libxt-dev \
    libssl-dev \
    libssh2-1-dev \
    build-essential \
    libglpk40

# system library dependency for the webapp app
RUN apt-get update && apt-get install -y \
    libmpfr-dev \
    libgit2-dev \
    libxml2-dev \
    libudunits2-dev \
    libpoppler-cpp-dev
  
RUN apt-get update -qq && apt-get -y --no-install-recommends install \
  libsqlite-dev \
  libmariadbd-dev \
  libmariadbclient-dev \
  libpq-dev \
  libssh2-1-dev \
  unixodbc-dev \
  libsasl2-dev 
  
 # Install the client libraries (only works fast for rocker >= 4.0.0 )
RUN install2.r --error \
    --deps TRUE \
    shiny \
    bigrquery
    
# copy the app to the image srv directory
COPY app.R /srv/shiny-server/app.R 

# overwrite  the shiny-customized.config to theetc/shiny-server directory
COPY shiny-customized.config /etc/shiny-server/shiny-server.conf

EXPOSE 8080

USER shiny

CMD ["/usr/bin/shiny-server"]
