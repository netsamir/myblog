var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
            75, 72, 67];

function render(data){

  var barWidth = 15;
  var barPadding = 3;
  var maxValue = d3.max(data);
  var margin = {'top': 10, 'bottom': 10, 'left': 10, 'right': 10};
  var graphWidth = data.length * (barWidth + barPadding) - barPadding;
  var graphHeight = maxValue;

  var svg = d3.select("#beta")
    .append('svg')
    .attr('width', graphWidth + margin.left + margin.right)
    .attr('height', graphHeight + margin.top + margin.bottom)

  svg.append('rect')
    .attr('width', graphWidth + margin.left + margin.right)
    .attr('height', graphHeight + margin.top + margin.bottom)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

 var graph = svg.append('g')
    .attr('transform', "translate(" + margin.top + "," + margin.left + ")")

 graph.append('rect')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('fill', "rgba(0, 0, 0, 0.1)")

  function xloc(d, i) { return i * (barWidth + barPadding); }
  function yloc(d) { return graphHeight - d; }

  var barGroup = graph.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function(d, i) { return 'translate(' + xloc(d, i) + ','
          + yloc(d) + ')' ;})
    .append('rect')
    .attr('width', 12)
    .attr('height', function(d) { return d; })
    .attr('fill', 'red');

 // barGroup.append('rect')
  //   .attr('x', function(d, i) { return (i * barWidth) + barPadding ;})
  //   .attr('y', function(d) { return graphHeight - d ;})
  //   .attr('width', barWidth)
  //   .attr('height', function(d) { return d; })
  //   .attr('fill', 'black');

 // var barGroup = graph.selectAll('g')
 //    .data(data)
 //    .enter()
 //    .append('g')
 //    .attr('x', function(d, i) { return (i * barWidth) + barPadding ;})
 //    .attr('y', function(d) { return graphHeight - d ;})
 //    .attr('width', barWidth)
 //    .attr('height', function(d) { return d; })

};


function render2(color){
  var x = d3.scaleLinear()
    .domain([-100, 100])
    .range([0, 1000])
    console.log(x(-100));
    console.log(x(10));
    console.log(x(2));
    console.log(x(41));
    console.log(x(100));

  var color = d3.scaleLinear()
    .domain([10, 50, 80, 100])
    .range(["brown", "white", "blue", "white"]);

  var svg = d3.select("#beta")
    .append('svg')
    .attr('width', 400)
    .attr('height', 400);

  for(i=0; i < 100; i++){
      svg.append('rect')
        .attr('transform', 'translate(' + i + ',' + i + ')')
        .attr('width', i)
        .attr('height', i)
        .attr('fill', color(i));
    }
}

//render(data);
render2(data);
