library(shiny)
library(bslib)
library(thematic)
library(ragg)
library(shinydashboard)

library(ggplot2)
library(plotly)
library(highcharter)
library(leaflet)

library(shinyWidgets)
library(DT)
library(purrr)



# Source Helper Functions
source("theme.R")

ui <- fluidPage(
  class="container-fluid mx-0 px-0",
  # BEGIN OSA THEMING=========================================================
  
  #add bg image
  style= paste0("    
      background-image: url(img/auditor_logo_bg_image.png);
      background-repeat: no-repeat;
      background-size: 500px 500px;
      background-position: top left;
    "),
  
  
  
  #add bslib theme from theme.R
  theme = bslib_osa_theme,
  
  #add bs5 css
  tags$link(rel = "stylesheet", type = "text/css", href = "css/bootstrap.css"),
  
  #overwrite Shinydashboard color classes for boxes
  tags$link(rel = "stylesheet", type = "text/css", href = "css/shinydashboard_overwrites.css"),
  
  #add google material icons
  tags$link(rel = "stylesheet", type = "text/css", href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"),
  
  #add utah header javascript.
  tags$script(src = "js/utah_header.js"),
  
  useShinydashboard(),
  
  # TO DO: add Google analytics tag
  
  # END OSA THEMING===========================================================
  
  div(class="container-fluid text-center mx-0 px-0",
      div(class="row",
          div(
            class="col",
          ),
          div(
            class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 align-self-center py-2 my-2 px-2 mx-2 bg-body-tertiary rounded-3",
            tags$h1(class="display-5 fw-bold",
                    "Dashboard Title"),
            p(class="fs-5",
              "Greet the User! This is a short message that explains the dashboard"
            ),
          ), #end col
          
          div(
            class="col"
            # class="col align-self-start text-end py-2 mx-2",
            # HTML("<button type='button' class='btn btn-info'>Submit Feedback</button> "),
            # HTML("<button type='button' class='btn btn-warning'>Help</button> ")
          ),
      )
  ), #end Container
  # Shiny UI =================================================================
  

  
  navbarPage(
    NULL,
    collapsible=T,

    tabPanel("Page 1",
             class=" bg-body-tertiary mx-0 my-2 py-0 px-0 border rounded-3",
             div(
               class="container-fluid",
               tags$h2("Page 1"),
               tags$p("Page 1 content"),
               plotlyOutput("plo_1"),
               DT::dataTableOutput("dto_1")
             )

             ),
    tabPanel("Page 2",
             class=" bg-body-secondary mx-0 my-2 py-0 px-0 border rounded-3",
             div(
               class="container-fluid",
               tags$h2("Page 2"),
               tags$p("Page 2 content shows a split page layout"),
               
               div(
                 class="row",
                 
               
                 div(
                   class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-body text-start border rounded-3 px-3 py-3",
                   highchartOutput("hco_1"),
                   tags$hr(),
                   DT::dataTableOutput("dto_2")
                 ),
                 div(
                   class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-body text-start border rounded-3 px-3 py-3",
                   highchartOutput("hco_2"),
                   tags$hr(),
                   DT::dataTableOutput("dto_3")
                 )
               )# end row
             )
             ),
    navbarMenu(
      "More",
      tabPanel("Page 3",
               class=" bg-light mx-0 my-2 py-0 px-0 border rounded-3",
                 div(
                   class="container-fluid",
                   tags$h2("Page 3"),
                   tags$p("Page 3 boxes example"),
                   
                   uiOutput("uio_boxes"),
                   # shinydashboard::infoBoxOutput("ibo_1"),
                   # shinydashboard::infoBoxOutput("ibo_2"),
                   # shinydashboard::infoBoxOutput("ibo_3"),
                   # shinydashboard::infoBoxOutput("ibo_4"),
                   
                 )
               ),
      tabPanel("Page 4",
               class=" bg-light mx-0 my-2 py-0 px-0 border rounded-3",
               div(
                 class="container-fluid",
                 tags$h2("Page 4"),
                 tags$p("Page 4 leaflet example"),
                 
                 div(
                   class="row",
                   div(
                     class="col-3",
                     uiOutput("ibo_1"),
                   ),
                   div(
                     class="col-3",
                     uiOutput("ibo_2"),
                   ),
                   div(
                     class="col-3",
                     uiOutput("ibo_3"),
                   ),
                   div(
                     class="col-3",
                     uiOutput("ibo_4"),
                   ),
                   
                 ),
                 leafletOutput("leafo_1"),
                 tags$hr(),
                 DT::dataTableOutput("dto_4")
               )
               )
    )
  )
  
) # End UI


server <- function(input, output) {
  
  
  
  
  output$po_1 <- renderPlot({
    x <- c(rnorm(10000), rnorm(1000, 4, 0.5))
    
    plot(x)
  })
  
    
  output$plo_1 <- renderPlotly({
    
    gg <- ggplot(trees, aes(x=Girth, y=Height, size=Volume)) +
      geom_point()
    
    ggplotly(gg)
  })
  
  output$hco_1 <- renderHighchart({
    x <- c("Min", "Mean", "Max")
    y <- sprintf("{point.%s}°", c("min_temperaturec", "mean_temperaturec", "max_temperaturec"))
    
    tltip <- tooltip_table(x, y)
    
    hchart(
      weather,
      type = "columnrange",
      hcaes(
        x = date, 
        low = min_temperaturec, 
        high = max_temperaturec,
        color = mean_temperaturec
      )
    ) %>% 
      hc_chart(
        polar = TRUE
      ) %>% 
      hc_yAxis(
        max = 30,
        min = -10,
        labels = list(format = "{value} C"),
        showFirstLabel = FALSE
      ) %>% 
      hc_xAxis(
        title = list(text = ""), 
        gridLineWidth = 0.5,
        labels = list(format = "{value: %b}")
      ) %>% 
      hc_tooltip(
        useHTML = TRUE,
        pointFormat = tltip,
        headerFormat = as.character(tags$small("{point.x:%d %B, %Y}"))
      ) %>% 
      hc_title(
        text = "Climatical characteristics of San Francisco"
      ) #%>%  
      # hc_size(
      #   height = 600
      # )
  })
  
  output$hco_2 <- renderHighchart({
    fntltp <- JS("function(){
  return this.point.x + ' ' +  this.series.yAxis.categories[this.point.y] + ': ' +
  Highcharts.numberFormat(this.point.value, 2);
}")
    
    plotline <- list(
      color = "#fde725", value = 1963, width = 2, zIndex = 5,
      label = list(
        text = "Vaccine Intoduced", verticalAlign = "top",
        style = list(color = "#606060"), textAlign = "left",
        rotation = 0, y = -5
      )
    )
    
    hchart(
      vaccines, 
      "heatmap", 
      hcaes(
        x = year,
        y = state, 
        value = count
      )
    ) |>
      hc_colorAxis(
        stops = color_stops(10, viridisLite::inferno(10, direction = -1)),
        type = "logarithmic"
      ) |>
      hc_yAxis(
        title = list(text = ""),
        reversed = TRUE, 
        offset = -20,
        tickLength = 0,
        gridLineWidth = 0, 
        minorGridLineWidth = 0,
        labels = list(style = list(fontSize = "9px"))
      ) |>
      hc_tooltip(
        formatter = fntltp
      ) |>
      hc_xAxis(
        plotLines = list(plotline)) |>
      hc_title(
        text = "Infectious Diseases and Vaccines"
      ) |>
      hc_subtitle(
        text = "Number of cases per 100,000 people"
      ) |> 
      hc_legend(
        layout = "horizontal",
        verticalAlign = "top",
        align = "left",
        valueDecimals = 0
      ) 
  })
  
  output$dto_1 <- renderDT({
    
    trees %>% 
      DT::datatable( 
        extensions = 'Buttons', 
        options = list(
          dom = 'Bfrtip',
          buttons = c('copy', 'csv', 'excel', 'pdf', 'print')
        )
      )
    
  })
  
  output$dto_2 <- renderDT({
    
    weather %>% 
      DT::datatable( 
        extensions = 'Buttons', 
        options = list(
          dom = 'Bfrtip',
          buttons = c('copy', 'csv', 'excel', 'pdf', 'print')
        )
      )
    
  })
  
  output$dto_3 <- renderDT({
    
    vaccines %>% 
      DT::datatable( 
        extensions = 'Buttons', 
        options = list(
          dom = 'Bfrtip',
          buttons = c('copy', 'csv', 'excel', 'pdf', 'print')
        )
      )
    
  })
  
  
  # Page 3 =====================================================================
  
  output$ibo_1 <- renderUI({
    infoBox(
      "Lemons",
      sample(1:100, 1, replace=FALSE), 
      icon = icon("lemon"),
      width=12,
      color = "yellow"
    )
  })
  
  output$ibo_2 <- renderUI({
    infoBox(
      "Apples", 
      sample(1:100, 1, replace=FALSE), 
      icon = icon("apple-whole"),
      width=12,
      color = "red"
    )
  })
  
  output$ibo_3 <- renderUI({
    infoBox(
      "Peppers", 
      sample(1:100, 1, replace=FALSE), 
      icon = icon("pepper-hot"),
      width=12,
      color = "green"
    )
  })
  
  output$ibo_4 <- renderUI({
    infoBox(
      "Carrots", 
      sample(1:100, 1, replace=FALSE), 
      icon = icon("carrot"),
      width=12,
      color = "orange"
    )
  })
  
  
  output$uio_boxes <- renderUI({
    possible_colors <- c("red",
                         "yellow",
                         "aqua",
                         "blue",
                         "light-blue",
                         "green",
                         "navy",
                         "teal",
                         "olive",
                         "lime",
                         "orange",
                         "fuchsia",
                         "purple",
                         "maroon",
                         "black")
    
    
    possible_colors %>% map(~{
      fluidRow(
      infoBox(
        "Info Box", 
        .x, 
        width=4,
        color = .x
      ),
      
      infoBox(
        "Info Box Fill", 
        .x, 
        width=4,
        color = .x,
        fill=T
      ),
      valueBox(.x, 
               "Value Box", 
               width =4,
               color = .x)
      )
      
      
    })#end map
    
    
  }) # end renderUI
  
  
  states_reactive <- reactive({
     geojsonio::geojson_read("https://rstudio.github.io/leaflet/json/us-states.geojson", what = "sp")
  })
  
  output$leafo_1 <- renderLeaflet({
    states <- states_reactive()
    
    bins <- c(0, 10, 20, 50, 100, 200, 500, 1000, Inf)
    pal <- colorBin("YlOrRd", domain = states$density, bins = bins)
    
    labels <- sprintf(
      "<strong>%s</strong><br/>%g people / mi<sup>2</sup>",
      states$name, states$density
    ) %>% lapply(htmltools::HTML)
    
    leaflet(states) %>%
      setView(-96, 37.8, 4) %>%
      addProviderTiles("MapBox", options = providerTileOptions(
        id = "mapbox.light",
        accessToken = Sys.getenv('MAPBOX_ACCESS_TOKEN'))) %>%
      addPolygons(
        fillColor = ~pal(density),
        weight = 2,
        opacity = 1,
        color = "white",
        dashArray = "3",
        fillOpacity = 0.7,
        highlightOptions = highlightOptions(
          weight = 5,
          color = "#666",
          dashArray = "",
          fillOpacity = 0.7,
          bringToFront = TRUE),
        label = labels,
        labelOptions = labelOptions(
          style = list("font-weight" = "normal", padding = "3px 8px"),
          textsize = "15px",
          direction = "auto")) %>%
      addLegend(pal = pal, values = ~density, opacity = 0.7, title = NULL,
                position = "bottomright")
  })
  
  output$dto_4 <- renderDT({
    
    states_reactive() %>% 
      as.data.frame() %>% 
      DT::datatable( 
        extensions = 'Buttons', 
        options = list(
          dom = 'Bfrtip',
          buttons = c('copy', 'csv', 'excel', 'pdf', 'print')
        )
      )
    
  })
  
  
} #end Server

# Run the application 
shinyApp(ui = ui, server = server)
