fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    console.log(data);

    const padding = { left: 60, top: 0, right: 30, bottom: 100 }

    const width = 1000 - padding.left - padding.right;
    const height = 600 - padding.top - padding.bottom;
    /*
    xScale = d3.scaleLinear()
      .domain(d3.min(d.Year))
      */

    const year = data.monthlyVariance.map((arr) => arr.year)
    const month = data.monthlyVariance.map((arr) => arr.month)
    const allmonths = d3.max(year) - d3.min(year);
    
  
    const xScale = d3.scaleLinear()
      .domain([d3.min(year), d3.max(year)])
      .range([padding.left, 1000 - padding.right])

    const yScale = d3.scaleLinear()
      .domain([d3.min(month),d3.max(month)])
      .range([600 - padding.bottom, padding.bottom])

     const svgContainer = d3.select("#svgWrapper")
       .append("svg")
       .attr("width", width)
       .attr("height", height)
       .attr("id", "mainSvg")
       .style("background-color", "yellow")
      

    const rect = d3.select('#mainSvg')
       .selectAll('rect')
      .data(data.monthlyVariance)
      .enter()
      .append('rect')
      .attr("width", width * (1/allmonths))
      .attr("height", height * (1/12))
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => height - yScale(d.month))
      .style("fill",(d) => {
        if (d.variance*8.66 < 2.8) {
          return "rgb(49, 54, 149)"
        } else if (d.variance*8.66 > 2.8 && d.variance*8.66 < 3.9) {
          return "rgb(69, 117, 180)"
        } else if (d.variance*8.66 > 3.9 && d.variance*8.66 < 5.0) {
          return "rgb(116, 173, 209)"
        } else if (d.variance*8.66 > 5.0 && d.variance*8.66 < 6.1) {
          return "rgb(171, 217, 233)"
        } else if (d.variance*8.66 > 6.1 && d.variance*8.66 < 7.2) {
          return "rgb(224, 243, 248)"
        } else if (d.variance*8.66 > 7.2 && d.variance*8.66 < 8.3) {
          return "rgb(255, 255, 191)"
        } else if (d.variance*8.66 > 8.3 && d.variance*8.66 < 9.5) {
          return "rgb(254, 224, 144)"
        } else if (d.variance*8.66 > 9.5 && d.variance*8.66 < 10.6) {
          return "rgb(253, 174, 97)"
        } else if (d.variance*8.66 > 10.6 && d.variance*8.66 < 11.7) {
          return "rgb(244, 109, 67)"
        } else if (d.variance*8.66 > 11.7 && d.variance*8.66< 12.8) {
          return "rgb(215, 48, 39)"
        } else if (d.variance*8.66 > 12.8) {
          return "rgb(165, 0, 38)"
        }
      })
   
 

/*
    rect.selectAll('title')
      .data(data.monthlyVariance)
      .enter()
      .text()

*/
  })