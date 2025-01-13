 //wait for the utah header to be ready
    document.addEventListener('utahHeaderLoaded', () => {
      //set up the utah header
      window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({

        "mainMenu": false,
        "mediaSizes": {
          "mobile": 640,
          "tabletPortrait": 768,
          "tabletLandscape": 1024
        },
        "size": "SMALL",
        "showTitle": false,
        "title": "Office of the State Auditor",
        "titleURL": "https://auditor.utah.gov/",
        "utahId": false,
        "footer": null,
        "logo": {
          "htmlString": "<img src=\"/../img/auditor-logo-w-text.svg\" id=\"design-system-logo\" />"
        },
        "skipLinkUrl": '#nav-logo-link',
        "actionItems": null,
        "onSearch": false

      });
      
      //manually update the logo link... 
      $(".utds-title-wrapper")
        .attr("href", 'https://auditor.utah.gov/')
        .attr("target", "_blank");
      
      
    });
    
  
  
  