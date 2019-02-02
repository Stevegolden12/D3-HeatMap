fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    console.log(data);

    const padding = { left: 60, top: 30, right: 30, bottom: 100 }

    const width = 1000 - padding.left - padding.right;
    const height = 600 - padding.top - padding.bottom;

    console.log(width);
    console.log(height);

    svgContainer = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "yellow")

  })