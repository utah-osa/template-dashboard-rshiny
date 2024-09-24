library(shiny)
library(bslib)
library(thematic)
library(ragg)


library(ggplot2)
# library(plotly)
library(highcharter)

library(shinyWidgets)
library(DT)



# Source Helper Functions
source("theme.R")

ui <- fluidPage(
    
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
    
    #add google material icons
    tags$link(rel = "stylesheet", type = "text/css", href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"),
    
    #add utah header javascript.
    tags$script(src = "js/utah_header.js"),

    useShinydashboard(),
    
    # TO DO: add Google analytics tag
    
    # END OSA THEMING===========================================================
    
    
    # Shiny UI =================================================================
    
    # Application title
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
      ),
      div(class="row mx-1",
        
        div(
          class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-body-secondary text-start border rounded-3 px-3 py-3",
          tags$h2("Input Examples"),
          hr(),
          h5("Picker Input"),
          pickerInput(
            inputId = "pi_1",
            choices = c("Option 1", "Option 2", "Option 3", "Option 4", "Option 5"),
            multiple = TRUE,
            selected = "Option 3", 
          ),
          
          h5("Text Input"),
          textInput(
            inputId = "ti_1",
            label=NULL,
            placeholder = "some placholder text"
          ),
          
          h5("Switch Input"),
          switchInput(
            inputId = "si_1",
            value = TRUE
          ),
          
          h5("Check Box Input"),
          awesomeCheckbox(
            inputId = "aci_1",
            label = "A single checkbox label", 
            value = TRUE,
            status = "danger"
          ),
          
          h5("Multiple Checkboxes Input"),
  
          awesomeCheckboxGroup(
            inputId = "acgi_1",
            choices = c("A", "B", "C"),
            label=NULL,
            status = "success"
          ),
          
          
          h5("Vertical Radio Button Input"),
          awesomeRadio(
            inputId = "ari_1",
            label = NULL, 
            choices = c("A", "B", "C"),
            selected = "B",
            status = "warning"
          ),
          
          h5("Horizontal Radio Button Group Input"),
          radioGroupButtons(
            inputId = "rgbi_1",
            choices = c("Choice 1", "Choice 2", "Choice 3"),
            status = "primary"
          )
          
          
        ), #end col
        
        div(
          class="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 bg-body-tertiary rounded-3 px-3 py-3",
          tags$h2("Plot Examples"),
          hr(),
          tags$h5("Highcharter Example"),
          highchartOutput("hco_1"),
          
          # tags$h5("Ggplot + Plotly Example"),
          # plotlyOutput("plo_1")
        ), #end col  
        
        div(
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-body-tertiary border text-start rounded-3 px-3 py-3 mt-2",
          tags$h2("Table Examples"),
          hr(),
          tags$h5("DT Table Example"),
          DT::dataTableOutput("dto_1")
        ) #end col
      
      )# end row 
    ), # end container
    
) # End UI


server <- function(input, output) {

    
  
  
  output$po_1 <- renderPlot({
    x <- c(rnorm(10000), rnorm(1000, 4, 0.5))
    
    plot(x)
  })
  
  # output$plo_1 <- renderPlotly({
  #   
  #   gg <- ggplot(cars, aes(x=speed, y=dist)) +
  #     geom_point()
  #   
  #   ggplotly(gg)
  # })
  
  output$hco_1 <- renderHighchart({
    x <- c(rnorm(10000), rnorm(1000, 4, 0.5))
    
    hchart(x, name = "data", color = osa_colors[["teal"]]) %>% 
      hc_tooltip(crosshairs = TRUE)
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
    
} #end Server

# Run the application 
shinyApp(ui = ui, server = server)
