
// ------------------- data 
  // key: name
  // orbit_radius: distance from parent
  // r: radius of planet/circle
  // speed: velocuty
  // phi0: phase angle
  // parent: what belongs to...
var planets = [ 
  { key:'Mercury',
    orbit_radius:35/*57.9*/, 
    r: 3, 
    speed: 47.4, 
    phi0: 35, 
    moons: [   
            ]
    }, 
  { key:"Venus",
    orbit_radius:80/*108.2*/, 
    r:   3, 
    speed: -35.0, 
    phi0: 185, 
    moons: [ 
            ]
    }, 
  { key:"Earth",
    orbit_radius:   149.6, 
    r:   3, 
    speed: 29.8, 
    phi0: 135,
    moons: [  
          { 
              key:"Moon",
              orbit_radius:  10, 
              r:   1, 
              speed: 1.0, 
              phi0:  15,
              parent: "Earth"
              
          }           
        ]
    }, 
  { key:"Mars",
    orbit_radius:   200, 
    r:   4, 
    speed: 24.1, 
    phi0: 235, 
    moons: [   
          { 
              key:"Phobos",
              orbit_radius:   10, 
              r: 1, 
              speed: 3.80, 
              phi0:  15,
              parent: "Mars"
          },          
            { key:"Deimos",
              orbit_radius:   15, 
              r: 1, 
              speed: 2.80, 
              phi0: 115,
              parent: "Mars"
          }           
        ]
    }, 
  { key: "Jupiter",
    orbit_radius:  350 /*227.9*/, 
    r:  15, 
    speed: 13.1, 
    phi0: 135, 
    moons: [  
          { 
          key:"Io",
          orbit_radius:  30, 
          r:   2, speed: 1.769, 
          phi0:  25,
          parent: "Jupiter"
          },          
          { 
            key:"Europa",
          orbit_radius:  36, 
          r:   1, 
          speed: 3.551, 
          phi0:  95,
          parent: "Jupiter"
          },          
          { key:"Ganymede",
          orbit_radius:  49, 
          r:   3, 
          speed: 7.155,
           phi0: 125,
           parent: "Jupiter"
           },          
          { 
          key:"Callisto",
          orbit_radius:  79, 
          r:   2, 
          speed: 16.69,
          phi0: 315,
          parent: "Jupiter"
          }           
        ]
    }, 
  { key:"Saturn",
    orbit_radius:   778.6, 
    r:  13, 
    speed: 9.7, 
    phi0: 260, 
    moons: [   
          {
            key:"Mimas",
            orbit_radius:  28, 
            r:   2, 
            speed: 0.942, 
            phi0: 120,
            parent: "Saturn" 
          },     
          { 
            key:"Enceladus",
            orbit_radius:  33, 
            r:   2, 
            speed: 1.37, 
            phi0:  20,
            parent: "Saturn" 
          },         
          { 
            key:"Tethys",
            orbit_radius:  38, 
            r:   2, 
            speed: 1.888, 
            phi0:   0,
            parent: "Saturn"  
          },          
          { 
            key:"Dione",
            orbit_radius:  44, 
            r:   2, 
            speed: 2.737, 
            phi0: 100,
            parent: "Saturn" 
          },          
          { 
            key:"Rhea",
            orbit_radius:  58, 
            r:   2, 
            speed: 4.518, 
            phi0: 300,
            parent: "Saturn"  
          },          
          { 
            key:"Titan",
            orbit_radius:  98, 
            r:   5, 
            speed: 15.95, 
            phi0: 180,
            parent: "Saturn"  
          },         
          { key:"Lapetus",
            orbit_radius: 70, 
            r:   3, 
            speed: 79.33, 
            phi0:  10,
            parent: "Saturn"  
          }           
        ]
  }, 
  { key:"Uranus",
    orbit_radius: 1200 /*1433.5*/, 
    r:   12, 
    speed: -6.8, 
    phi0:  35, 
    moons: [   
          { 
            key:"Miranda", 
            orbit_radius:  28, 
            r: 2, 
            speed: 1.413, 
            phi0:  25,
            parent: "Uranus"  
          },          
          { 
            key:"Ariel",
            orbit_radius:  38, 
            r:   2, 
            speed: 2.52, 
            phi0:  95,
            parent: "Uranus"  
          },          
          { 
            key:"Umbriel",
            orbit_radius:  50, 
            r:   1, 
            speed: 4.144, 
            phi0: 125,
            parent: "Uranus"  
          },          
          { 
            key:"Titania",
            orbit_radius:  79, 
            r: 3, 
            speed: 8.706, 
            phi0: 315,
            parent: "Uranus"  
          },          
          { 
            key:"Oberon",
            orbit_radius: 109, 
            r: 3, 
            speed: 13.46, 
            phi0:  15,
            parent: "Uranus"  
          }           
        ]
    },
  { key:"Neptune",
    orbit_radius: 1800 /*2872.5*/, 
    r: 11, 
    speed: 5.4, 
    phi0: 215, 
    moons: [ 
         { 
            key:"Triton",
            orbit_radius:  30, 
            r:   3, 
            speed: -5.877, 
            phi0:  25,
            parent: "Neptune"  
          },       
         { 
            key:"Proteus",
            orbit_radius:  36, 
            r:   2, 
            speed: 1.122, 
            phi0:  95,
            parent: "Neptune"  
        },         
      ]
    },
  ];


// ..............draw orbital layout
//declare variables
var p;
var svg;
var container;
var mySun;
var interval;
var planet_array;
var moon_array;
var tooltip_string_planet;
var tooltip_string_moon;
var tooltip;
var planet_clust_array;
var line_array;
var sun_size= 10;
var sun_radius_difference = 5;
var sun_radius = sun_size + sun_radius_difference;
var t = new Date(); 
var w = window.innerWidth;
var h = window.innerHeight;
var x = (w/2) - 70;
var y = (h/2) - 40;

window.addEventListener('load', function(){
  //to show lines on hover over the sun
  mySun = document.getElementById("sun");
  mySun.addEventListener("mouseover", function(){
    line_array = document.querySelectorAll("line");
      for (var l = line_array.length - 1; l >= 0; l--){
        line_array[l].setAttribute("opacity", .9);
      }
    });
  //to hide lines on mouse out of the sun
  mySun.addEventListener("mouseout", function(){
  for (var l = line_array.length - 1; l >= 0; l--){
        line_array[l].setAttribute("opacity", 0);
      }
    });
  d3.select(mySun)
    .on('mouseover', function(d) {
                  tooltip.transition()
                  .style('opacity', .8)
                  .style("width", "auto")
                  tooltip.html(d)
                  .style('left', (event.clientX + 10) + 'px')
                  .style('top',  (event.clientY + 10) + 'px')
                  .text((function(d) { return "Sun"  }))            
                })
               .on('mouseout', function(d) {
                  tooltip.transition()
                  .style('opacity', 0)
                })
  //Start();
  SwitcherStopSpin();
})//close load event listener

//get element
p = d3.select('#chart');

//create svg
svg = p.insert("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", 'orbits');

//assign sun
mySun = svg.select('#sun');

//create and append tooltip
tooltip = d3.select('body').append('div')
    .attr("class","tool")
    .style('position', 'absolute')
    .style('opacity', 0);

// draw planet container
container = svg.append("g")
    .attr("id", "orbit_container")
    .attr("transform", "translate(" + x + "," + y + ")");


// draw planets and moons clusters
container.selectAll("g.planet").data(planets).enter().append("g")
         .attr("class", "planet_cluster").each(function(d, i) {
          //draw moons first (to hide lines behind)
            d3.select(this).append("g").attr("transform", "translate(" + (sun_size + d.orbit_radius/3) + ")")
              .selectAll("g.moon").data(d.moons).enter().append("g")
              .attr("class", "moon_cluster").each(function(d, m) {
                d3.select(this).append("line").attr("x1", this.x).attr("y1", this.y).attr("x2", d.orbit_radius).attr("y2",0).attr("class","m_line").attr("opacity", 0);
                d3.select(this).append("circle").attr("class", "orbit")
                  .attr("r", d.orbit_radius).attr("stroke","#00A0C4");
                d3.select(this).append("circle").attr("r", d.r).attr("cx", d.orbit_radius)
                  .attr("cy", 0).attr("class", "moon")
                .on('mouseover', function(d) {
                  tooltip
                  .style('opacity', .8)
                  .style("width", "10em")
                  tooltip_string_moon = "\nName:" +planets[i].moons[m].key + "\nRadius:" + planets[i].moons[m].r + "\nPlanet:" + planets[i].moons[m].parent;
                  tooltip.html(d)
                  .style('left', (event.clientX + 10) + 'px')
                  .style('top',  (event.clientY + 10) + 'px')
                  .text((function(d) { return tooltip_string_moon  }))            
                })
               .on('mouseout', function(d) {
                  tooltip.transition()
                  .style('opacity', 0)
                })
            });
          //draw planets second
            d3.select(this).append("circle").attr("class", "orbit")
              .attr("r", sun_size + d.orbit_radius/3).attr("stroke","#E831E2");
                d3.select(this).append("line").attr("x1", mySun.x).attr("y1", mySun.y).attr("x2", d.orbit_radius/3+sun_size).attr("y2",0).attr("class","p_line").attr("opacity", 0);
                d3.select(this).append("circle").attr("r",d.r).attr("cx", sun_size + d.orbit_radius/3)
                  .attr("cy", 0).attr("class", "planet")
                  .on('mouseover', function(d) {
                      tooltip
                      .style('opacity', .8)
                      .style("width", "10em")
                      tooltip_string_planet ="Name:"+ planets[i].key + "\nRadius:" + planets[i].r+ "\nDistance:" + planets[i].orbit_radius + "\nMoon(s):" + planets[i].moons.length;//-----?????????????
                      tooltip.html(d)
                      .style('left', (event.clientX + 10) + 'px')
                      .style('top',  (event.clientY + 10) + 'px')
                      .text((function(d) { return tooltip_string_planet }))            
                  })
                  .on('mouseout', function(d) {
                      tooltip.transition()
                      .style('opacity', 0)
                  })
 });

//draw sun
svg.append("circle")
   .attr("r", sun_size)
   .attr("cx", x)
   .attr("cy", y)
   .attr("id", "sun");



// add event listeners to each planet and moon
function SwitcherStopSpin (){
  //Start();
    planet_array = document.querySelectorAll('.planet');
    moon_array = document.querySelectorAll('.moon');
    for (var i = planet_array.length - 1; i >= 0; i--) {
      planet_array[i].addEventListener('mouseover', Stop);
      planet_array[i].addEventListener('mouseout', Start);
          for (var m = moon_array.length - 1; m >= 0; m--){
            moon_array[m].addEventListener('mouseover', Stop);
            moon_array[m].addEventListener('mouseout', Start);
          }      
    };
}

//set interval
function Start(){
  interval = setInterval(Spin, 
40);
}

//clear interval
function Stop(){
  clearInterval(interval);
  ShowHideLines();
}

//event listeners for displaying lines
function ShowHideLines(){
  planet_clust_array = document.querySelectorAll(".planet_cluster");
  for (var i = planet_clust_array.length - 1; i >= 0; i--){
    planet_clust_array[i].addEventListener('mouseover',function(){
    line_array = this.querySelectorAll("line");
      for (var l = line_array.length - 1; l >= 0; l--){
        line_array[l].setAttribute("opacity", .9);
      }
    });
     planet_clust_array[i].addEventListener('mouseout',function(){
      for (var l = line_array.length - 1; l >= 0; l--){
        line_array[l].setAttribute("opacity", 0);
      }
     });
  }
}

//set speed for rotation of each planet
function Spin() {
    var t1 = (Date.now() - t);//to make it moooove
    svg.selectAll(".planet_cluster, .moon_cluster").attr("transform", function(d) {
    return "rotate(" + (d.phi0/*angle*/ + (t1 * (d.speed/900/*to slow down*/)) ) + ")";
    });
  }

